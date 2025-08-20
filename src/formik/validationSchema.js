import * as Yup from "yup"

export const pedidoValidationSchema = Yup.object({
    name: Yup.string().required("Tu nombre completo es un campo obligatorio."),
    cellphone: Yup.string().required("Tu celular es un campo obligatorio."),
    address: Yup.string().required("Tu dirección es un campo obligatorio."),
    email: Yup.string().required("Tu correo electrónico es un campo obligatorio."),
})