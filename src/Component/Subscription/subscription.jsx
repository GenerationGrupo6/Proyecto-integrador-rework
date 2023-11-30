import { useForm } from "react-hook-form";
import "./subscription.css";
import axios from "axios";
import React from "react";

function Subscription() {
  const { register, handleSubmit } = useForm();

  const onSubmit = async (data) => {
    try {
      const response = await axios.post(
        "http://localhost:8080/api/v1/submitSubscription",
        data
      );
      console.log(response.data);
      alert("Suscripción enviada con éxito");
    } catch (error) {
      console.error("Error al subscribirse:", error);
    }
  };

  return (
    <form className="div-email-subscription" onSubmit={handleSubmit(onSubmit)}>
      <div className="submit-email-subscription">
        <input
          placeholder="Escriba su email"
          type="String"
          name="email"
          {...register(
            "email",
            {
              required: true,
            },
            { unique: true }
          )}
        />
      </div>
      <div className="div-submit-email-subscription">
        <input
          className="input-submit-subscribe"
          type="submit"
          value="Suscríbete"
        />
      </div>
    </form>
  );
}

export { Subscription };
