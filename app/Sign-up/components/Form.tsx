"use client";

import React, { useState, ChangeEvent, HTMLAttributes, useEffect } from "react";
import Input from "./Input";

interface InputProps extends HTMLAttributes<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement> {
  label?: string;
  error?: string;
  name?: string;
  required?: boolean;
  type?: string;
  children?: React.ReactNode;
  value?: string | number | undefined;
  placeholder?: string;
  disabled?: boolean;
  className?: string;
  validate?: (value: string | number | undefined) => string | undefined;
}

interface FormProps {
  fields: InputProps[];
  onSubmit: (data: Record<string, unknown>) => Promise<void>;
  submitButtonText?: string;
  defaultValues?: Record<string, unknown>;
}

const Form: React.FC<FormProps> = ({
  fields,
  onSubmit,
  submitButtonText = "Submit",
  defaultValues = {},
}) => {
  const [formData, setFormData] = useState<Record<string, unknown>>(defaultValues);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const initialFormData: Record<string, unknown> = { ...defaultValues };
    fields.forEach((field) => {
      if (field.name && !(field.name in initialFormData)) {
        initialFormData[field.name] = "";
      }
    });
    setFormData(initialFormData);
  }, [defaultValues, fields]);

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;

    if (name) {
      setFormData((prevFormData) => {
        const updatedFormData = { ...prevFormData };

        if (type === "checkbox") {
          const checkboxEvent = e as ChangeEvent<HTMLInputElement>;
          const checkboxValue = checkboxEvent.target.value;
          const isChecked = checkboxEvent.target.checked;

          const currentValues = Array.isArray(updatedFormData[name])
            ? [...(updatedFormData[name] as string[])]
            : [];

          if (isChecked) {
            if (!currentValues.includes(checkboxValue)) {
              currentValues.push(checkboxValue);
            }
          } else {
            const index = currentValues.indexOf(checkboxValue);
            if (index > -1) {
              currentValues.splice(index, 1);
            }
          }

          updatedFormData[name] = currentValues;
        } else if (type === "file" && e.target instanceof HTMLInputElement) {
          updatedFormData[name] = e.target.files?.[0];
        } else {
          updatedFormData[name] = value;
        }

        return updatedFormData;
      });

      setErrors((prevErrors) => ({ ...prevErrors, [name]: "" }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    let hasErrors = false;
    const newErrors: Record<string, string> = {};

    fields.forEach((field) => {
      if (field.name) {
        const value = formData[field.name];
        if (field.required) {
          if (field.type === "checkbox") {
            if (!value || (Array.isArray(value) && value.length === 0)) {
              newErrors[field.name] = `${field.label || field.name} is required.`;
              hasErrors = true;
            }
          } else if (!value) {
            newErrors[field.name] = `${field.label || field.name} is required.`;
            hasErrors = true;
          }
        }
        if (field.validate) {
          const validationError = field.validate(value as string | number | undefined);
          if (validationError) {
            newErrors[field.name] = validationError;
            hasErrors = true;
          }
        }
      }
    });

    if (hasErrors) {
      setErrors(newErrors);
      return;
    }

    setLoading(true);
    try {
      await onSubmit(formData);
    } finally {
      setLoading(false);
    }
  };

  const getValue = (fieldName: string | undefined): string | number | File | string[] | undefined => {
    if (!fieldName) return undefined;
    const value = formData[fieldName];

    if (value instanceof File) {
      return value;
    }

    if (Array.isArray(value)) {
      return value;
    }

    return value !== undefined && value !== null ? String(value) : undefined;
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col gap-2 lg:justify-normal justify-center mx-auto w-full align-center"
    >
      {fields.map((field) => (
        <Input
          key={field.name}
          {...field}
          value={getValue(field.name)}
          onChange={handleChange}
          error={field.name ? errors[field.name] : undefined}
        />
      ))}
      <button
        type="submit"
        className={`bg-[#0A92DD] hover:bg-[#0a93dd79] text-white w-[70%] m-auto font-bold py-2 px-4 rounded ${
          loading ? "opacity-50 cursor-not-allowed" : ""
        }`}
        disabled={loading}
      >
        {loading ? "Submitting..." : submitButtonText}
      </button>
    </form>
  );
};

export default Form;