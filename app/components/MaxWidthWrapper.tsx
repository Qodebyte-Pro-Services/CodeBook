
import { ReactNode } from "react";

interface MaxWidthWrapperProps {
    children: ReactNode,
    className?: string
}

const MaxWidthWrapper: React.FC<MaxWidthWrapperProps> = ({className, children}) => {
  return <div className={`lg:mx-auto md:mx-2 max-w-[1920px]  xl:px-1 md:px-2 ${className}`}>
    {children}
  </div>
};

export default MaxWidthWrapper;
