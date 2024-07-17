import React, { useEffect } from "react";
import { Stepper } from "react-form-stepper";
import { useNavigate } from "react-router-dom";

export const StepsForm = () => {
  const navigate = useNavigate();
  useEffect(() => {
    const getCompletedSteps = document.querySelectorAll(
      ".completed.stepper__step"
    );
    getCompletedSteps?.length >= 1 &&
      getCompletedSteps.forEach((elm) => {
        const spanElement = elm.querySelector("span");
        if (spanElement) {
          spanElement.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-check-check"><path d="M18 6 7 17l-5-5"/><path d="m22 10-7.5 7.5L13 16"/></svg>`;
        }
      });

    getCompletedSteps[1].addEventListener("click", function () {
      navigate("/cart");
    });
  }, []);

  return (
    <Stepper
      steps={[
        { label: "Cart" },
        { label: "Shipping" },
        { label: "Payment" },
        { label: "My Order" },
      ]}
      styleConfig={{
        activeBgColor: "#51B4FF",
        activeTextColor: "#fff",
        inactiveBgColor: "#BCE0FB",
        inactiveTextColor: "#FFFFFF",
        completedBgColor: "#d9d9d9",
        completedTextColor: "#6F6A6A",

        size: "2.5em",
      }}
      connectorStyleConfig={{
        size: "2px",
        activeColor: "red",
      }}
      className={"stepper"}
      stepClassName={"stepper__step"}
      activeStep={2}
    />
  );
};
