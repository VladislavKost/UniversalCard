import "bootstrap/dist/css/bootstrap.min.css";
import "./Card.css";

export const Card = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="card" style={{ width: "18rem" }}>
      {children}
    </div>
  );
};
