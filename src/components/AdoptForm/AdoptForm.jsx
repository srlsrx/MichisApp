import { useForm } from "react-hook-form";
import Button from "../Button/Button";
import FormError from "../FormError/FormError";
import { useState } from "react";
import Modal from "../Modal/Modal";
import Lottie from "lottie-react";
import success from "../../assets/animations/success.json";

/**
 * Formulario de adopción para un gato específico.
 *
 * Este formulario permite a los usuarios enviar una solicitud de adopción
 * mostrando su nombre, email y un mensaje opcional. Se adapta a modo claro y oscuro.
 *
 * @component
 * @param {Object} props - Propiedades del componente.
 * @param {string} props.catName - Nombre del gato.
 * @returns {JSX.Element} Formulario renderizado.
 * @author Ángel
 */
function AdoptForm({ catName }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [isModalOpen, setIsModalOpen] = useState(false);

  const onSubmit = (data) => {
    console.log("Formulario enviado:", data);
    setIsModalOpen(true);
  };

  return (
    <>
      <div className="xl:w-[30%]">
        <h2 className="text-2xl font-bold mb-6 text-teal-600 dark:text-teal-400 text-center">
          Formulario de adopción de {catName}
        </h2>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="space-y-6 bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md"
        >
          <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
            Los campos marcados con{" "}
            <span className="text-teal-500 font-bold">*</span> son obligatorios.
          </p>
          <div>
            <label
              className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
              for=""
            >
              Nombre completo<span className="text-teal-500">*</span>
            </label>
            <input
              id="name"
              type="text"
              {...register("name", { required: "Este campo es obligatorio" })}
              className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-teal-400"
              placeholder="Tu nombre"
            />
            <FormError message={errors.name?.message} />
          </div>

          <div>
            <label
              className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
              for="email"
            >
              Correo electrónico<span className="text-teal-500">*</span>
            </label>
            <input
              id="email"
              type="email"
              {...register("email", {
                required: "Este campo es obligatorio",
                pattern: {
                  value: /^[^@\s]+@[^@\s]+\.[^@\s]+$/,
                  message: "Email no válido",
                },
              })}
              className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-teal-400"
              placeholder="tucorreo@ejemplo.com"
            />
            <FormError message={errors.email?.message} />
          </div>
          <div>
            <label
              className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
              htmlFor="tel"
            >
              ¿Teléfono?<span className="text-teal-500">*</span>
            </label>
            <input
              id="tel"
              type="tel"
              {...register("tel", {
                required: "Este campo es obligatorio",
                pattern: {
                  value: /^[0-9]{9}$/,
                  message: "El telefono debe tener 9 dígitos",
                },
              })}
              className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-teal-400"
              placeholder="982 XXX XXX"
            />
            <FormError message={errors.tel?.message} />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              ¿Por qué quieres adoptar?
              <span className="text-gray-400 text-xs">(opcional)</span>
            </label>
            <textarea
              {...register("message")}
              className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-teal-400"
              placeholder="Cuéntanos un poco sobre ti..."
              rows={4}
            />
          </div>

          <Button type="submit" text="Enviar solicitud" txtColor="text-white" />
        </form>
      </div>
      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title="¡Solicitud enviada!"
        icon={<Lottie animationData={success} />}
      >
        <p className="text-sm">
          Gracias por querer adoptar a <strong>{catName}</strong>. Nos pondremos
          en contacto contigo pronto 🐾
        </p>
      </Modal>
    </>
  );
}

export default AdoptForm;
