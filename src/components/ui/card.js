// src/components/ui/card.js
export const Card = ({ children, className = '' }) => (
    <div className={`bg-white rounded-lg shadow-md ${className}`}>
      {children}
    </div>
  );
  
  export const CardHeader = ({ children }) => (
    <div className="p-4 border-b">{children}</div>
  );
  
  export const CardTitle = ({ children, className = '' }) => (
    <h2 className={`text-xl font-bold ${className}`}>{children}</h2>
  );
  
  export const CardContent = ({ children }) => (
    <div className="p-4">{children}</div>
  );