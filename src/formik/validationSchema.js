import * as Yup from "yup"

export const pedidoValidationSchema = Yup.object({
    name: Yup.string().required("Campo requerido"),
    cellphone: Yup.string().required("Campo requerido"),
    address: Yup.string().required("Campo requerido"),
    email: Yup.string().required("Campo requerido"),
})