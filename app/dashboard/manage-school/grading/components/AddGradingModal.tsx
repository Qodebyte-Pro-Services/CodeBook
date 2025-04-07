import Input from "@/app/dashboard/teachers/add-teacher/compoenent/Input";
import { X } from "lucide-react";
import { useEffect, useState } from "react";

interface AddGradingModalProps {
    isOpen: boolean;
    onClose: () => void;
    onSave: (data: { grade: string; totalScore: string; remark: string }) => void;
    editingGrade?: { grade: string; totalScore: string; remark: string } | null;
  }
  
  const AddGradingModal: React.FC<AddGradingModalProps> = ({
    isOpen,
    onClose,
    onSave,
    editingGrade,
  }) => {
    const [grade, setGrade] = useState(editingGrade?.grade || "");
    const [totalScore, setTotalScore] = useState(editingGrade?.totalScore || "");
    const [remark, setRemark] = useState(editingGrade?.remark || "");
    const [errorMessage, setErrorMessage] = useState<string | null>(null);
  
    useEffect(() => {
      if (editingGrade) {
        setGrade(editingGrade.grade);
        setTotalScore(editingGrade.totalScore);
        setRemark(editingGrade.remark);
      }
    }, [editingGrade]);
  
    const handleSave = () => {
      if (!grade || !totalScore || !remark) {
        setErrorMessage("Please fill in all fields.");
        return;
      }
  
      onSave({ grade, totalScore, remark });
      setGrade("");
      setTotalScore("");
      setRemark("");
      setErrorMessage(null);
      onClose();
    };
  
    if (!isOpen) return null;
  
    return (
      <div className="fixed z-10 inset-0 bg-gray-500/75 flex justify-center items-center">
        <div className="bg-white p-6 rounded-lg w-full max-w-md">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg font-semibold">
              {editingGrade ? "Edit Grade" : "Add Grade"}
            </h2>
            <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
             <X/>
            </button>
          </div>
  
          <div className="mb-4">
            <Input
              type="text"
              label="Grade"
              placeholder="e.g., A"
              value={grade}
              onChange={(e) => setGrade(e.target.value)}
            />
          </div>
  
          <div className="mb-4">
            <Input
              type="text"
              label="Total Score"
              placeholder="e.g., 90 - 100"
              value={totalScore}
              onChange={(e) => setTotalScore(e.target.value)}
            />
          </div>
  
          <div className="mb-4">
            <Input
              type="text"
              label="Remark"
              placeholder="e.g., Excellent"
              value={remark}
              onChange={(e) => setRemark(e.target.value)}
            />
          </div>
  
          {errorMessage && (
            <p className="text-red-500 text-sm mb-4">{errorMessage}</p>
          )}
  
          <button
            onClick={handleSave}
            className="w-full bg-blue-500 text-white rounded-md py-2 hover:bg-blue-600"
          >
            Save
          </button>
        </div>
      </div>
    );
  };
  
  export default AddGradingModal;