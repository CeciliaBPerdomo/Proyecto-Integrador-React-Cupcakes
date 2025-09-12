import * as Yup from "yup"

export const pedidoValidationSchema = Yup.object({
    name: Yup.string().required("Tu nombre completo es un campo obligatorio."),
    cellphone: Yup.string().required("Tu celular es un campo obligatorio."),
    address: Yup.string().required("Tu dirección es un campo obligatorio."),
    location: Yup.string().required("Tu ciudad es un campo obligatorio."),
})

export const contactoValidtionSchema = Yup.object({
    nombre: Yup.string().required("Tu nombre completo es un campo obligatorio."),
    email: Yup.string().required("Tu correo electrónico es un campo obligatorio."),
    mensaje: Yup.string()
        .min(10, 'El mensaje debe de tener un mínimo 10 caracteres')
        .max(500, 'El mensaje debe de tener un máximo 500 caracteres')
        .required("Debes de ingresar un mensaje, es obligatorio."),
})

export const registroValidationSchema = Yup.object({
    nombre: Yup.string().required("Tu nombre completo es un campo obligatorio."),
    email: Yup.string()
        .email("Ingrese un email válido")
        .required("Tu correo electrónico es un campo obligatorio."),
    password: Yup.string()
        .min(6, "Debes ingresar 6 caracteres mínimo")
        .required("El password es un campo requerido")
})

export const loginValidationSchema = Yup.object({
    email: Yup.string()
        .email("Ingrese un email válido")
        .required("Tu correo electrónico es un campo obligatorio."),
    password: Yup.string()
        .min(6, "Debes ingresar 6 caracteres mínimo")
        .required("El password es un campo requerido")
})