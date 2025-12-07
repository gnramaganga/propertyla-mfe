"use client";

interface ProgressProps {
  currentStep: number;
}

export default function VerticalProgress({ currentStep }: ProgressProps) {
  const steps = [
    { id: 1, label: "Basic Details" },
    { id: 2, label: "Location Details" },
    { id: 3, label: "Property Details" },
    { id: 4, label: "Photos, Videos" },
    { id: 5, label: "Amenities" },
  ];

  return (
    <div className="wrapper">
      <div className="container verticl-progress-bar">
        {steps.map((step) => {
          const isActive = currentStep >= step.id;

          return (
            <div key={step.id} className="stepRow">
              <div
                className={`circleOuter ${isActive ? "circleOuterActive" : ""}`}
              >
                <div
                  className={`innerDot ${isActive ? "innerDotActive" : ""}`}
                />
              </div>

              <div className="labelBlock">
                <div className="label">{step.label}</div>
                <div className="sub">Step {step.id}</div>
              </div>
            </div>
          );
        })}
      </div>

      {/* CSS inside component */}
      <style jsx>{`
        .wrapper {
          position: relative;
        }
        .container {
          display: flex;
          flex-direction: column;
          gap: 35px;
          position: relative;
          z-index: 2;
        }

        .stepRow {
          display: flex;
          align-items: center;
          gap: 12px;
          position: relative;
        }

        .circleOuter {
          width: 25px;
          height: 25px;
          border-radius: 50%;
          border: 3px solid #d1d5db;
          background: white;
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 3;
        }

        .circleOuterActive {
          border-color: rgba(233, 69, 91, 0.7803921569);
        }

        .innerDot {
          width: 12px;
          height: 12px;
          border-radius: 50%;
          background: transparent;
        }

        .innerDotActive {
          background: rgba(233, 69, 91, 0.7803921569);
        }

        .labelBlock {
          display: flex;
          flex-direction: column;
        }

        .label {
          font-size: 15px;
          color: #333;
        }

        .sub {
          font-size: 11px;
          color: #777;
        }
      `}</style>
    </div>
  );
}
