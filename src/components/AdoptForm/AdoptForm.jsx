import { useForm } from "react-hook-form";
import Button from "../Button/Button";
import FormError from "../FormError/FormError";
import { useState } from "react";
import Modal from "../Modal/Modal";
import Lottie from "lottie-react";
import success from "../../assets/animations/success.json";
import { useTranslation } from "react-i18next";

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
 * @author {Ángel Aragón}
 */
function AdoptForm({ catName }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [response, setResponse] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const { t } = useTranslation();

  const onSubmit = (data) => {
    setResponse(data);
    setIsModalOpen(true);
  };

  return (
    <>
      <div className="xl:w-[30%]">
        <h2 className="text-2xl font-bold mb-6 text-teal-600 dark:text-teal-400 text-center">
          {t("adopt_form_title")} {catName}
        </h2>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="space-y-6 bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md"
        >
          <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
            {t("adopt_form_info_start")}{" "}
            <span className="text-teal-500 font-bold">*</span>{" "}
            {t("adopt_form_info_end")}.
          </p>
          <div>
            <label
              className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
              for="name"
            >
              {t("adopt_form_name_label")}
              <span className="text-teal-500">*</span>
            </label>
            <input
              id="name"
              type="text"
              {...register("name", { required: t("adopt_form_required") })}
              className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-teal-400"
              placeholder={t("adopt_form_name_placeholder")}
            />
            <FormError message={errors.name?.message} />
          </div>

          <div>
            <label
              className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
              for="email"
            >
              {t("adopt_form_email_label")}
              <span className="text-teal-500">*</span>
            </label>
            <input
              id="email"
              type="email"
              {...register("email", {
                required: t("adopt_form_required"),
                pattern: {
                  value: /^[^@\s]+@[^@\s]+\.[^@\s]+$/,
                  message: t("adopt_form_email_invalid"),
                },
              })}
              className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-teal-400"
              placeholder={t("adopt_form_email_placeholder")}
            />
            <FormError message={errors.email?.message} />
          </div>
          <div>
            <label
              className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
              htmlFor="tlf"
            >
              {t("adopt_form_tlf_label")}
              <span className="text-teal-500">*</span>
            </label>
            <input
              id="tlf"
              type="tlf"
              {...register("tlf", {
                required: t("adopt_form_required"),
                pattern: {
                  value: /^[0-9]{9}$/,
                  message: t("adopt_form_tlf_invalid"),
                },
              })}
              className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-teal-400"
              placeholder="982 XXX XXX"
            />
            <FormError message={errors.tlf?.message} />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              {t("adopt_form_msg_label")}
              <span className="text-gray-400 text-xs">
                ({t("adopt_form_msg_label_opt")})
              </span>
            </label>
            <textarea
              {...register("message")}
              className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-teal-400"
              placeholder={t("adopt_form_msg_placeholder")}
              rows={4}
            />
          </div>

          <Button type="submit" text="Enviar solicitud" txtColor="text-white" />
        </form>
      </div>
      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title={t("adopt_form_modal_title")}
        icon={<Lottie animationData={success} />}
      >
        <p className="text-sm">
          😸 {t("adopt_form_modal_msg_thx")} <strong>{response?.name}</strong>{" "}
          {t("adopt_form_modal_msg_adopt")} <strong>{catName}</strong> 🩵
          <br />
          {t("adopt_form_modal_msg_contact")} <strong>{response?.email}</strong>{" "}
          😽.
        </p>
      </Modal>
    </>
  );
}

export default AdoptForm;
