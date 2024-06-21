import { useForm } from "react-hook-form";

const DEFAULT_VALUES = {
  name: "",
  email: "",
  phone: "",
  content: "",
};

const useContactsForm = () => {
  const {
    formState: { errors },
    register,
    handleSubmit,
  } = useForm<typeof DEFAULT_VALUES>({
    mode: "onTouched",
    defaultValues: DEFAULT_VALUES,
  });

  const handleInquire = handleSubmit(() => {
    alert("성공적으로 메시지가 보내졌습니다.");
  });

  return { errors, register, handleInquire };
};

export default useContactsForm;
