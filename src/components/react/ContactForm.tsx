import * as React from 'react'
// Importar useForm y ValidationError de la librería de Formspree
import { useForm, ValidationError } from '@formspree/react'

const ContactForm: React.FC = () => {
  // importar el id del formulario desde las variables de entorno
  // Configurar useForm con el ID del formulario
  const [state, handleSubmit] = useForm(import.meta.env.PUBLIC_FORMSPREE_ID)

  if (state.succeeded) {
    return (
      <div className="space-y-4">
        <div
          className="bg-green-100 border-l-4 border-green-500 text-green-700 p-4 rounded-md"
          role="alert"
        >
          <p className="font-bold">¡Mensaje Enviado!</p>
          <p>Gracias por contactarme, te responderé a la brevedad posible.</p>
        </div>
        <button
          onClick={() => window.location.reload()}
          className="w-full py-3 px-4 border border-cyan-600 rounded-md text-cyan-600 hover:bg-cyan-50 transition duration-200"
        >
          Enviar otro mensaje
        </button>
      </div>
    )
  }

  return (
    // La función handleSubmit maneja el envío del formulario.
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label
          htmlFor="name"
          className="block text-sm font-medium text-gray-700 dark:text-gray-300"
        >
          Nombre Completo
        </label>
        <input
          type="text"
          name="name"
          id="name"
          required
          aria-invalid={state.errors ? 'true' : 'false'}
          className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:ring-cyan-500 focus:border-cyan-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
        />
        <ValidationError field="name" errors={state.errors} className="text-red-500 text-sm mt-1" />
      </div>

      <div>
        <label
          htmlFor="email"
          className="block text-sm font-medium text-gray-700 dark:text-gray-300"
        >
          Correo Electrónico
        </label>
        <input
          type="email"
          name="email"
          id="email"
          required
          aria-invalid={state.errors ? 'true' : 'false'}
          className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:ring-cyan-500 focus:border-cyan-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
        />
        <ValidationError
          prefix="Email"
          field="email"
          errors={state.errors}
          className="text-red-500 text-sm mt-1"
        />
      </div>

      <div>
        <label
          htmlFor="message"
          className="block text-sm font-medium text-gray-700 dark:text-gray-300"
        >
          Mensaje
        </label>
        <textarea
          name="message"
          id="message"
          rows={4}
          required
          aria-invalid={state.errors ? 'true' : 'false'}
          className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:ring-cyan-500 focus:border-cyan-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
        />
        <ValidationError
          field="message"
          errors={state.errors}
          className="text-red-500 text-sm mt-1"
        />
      </div>

      <div>
        <button
          type="submit"
          // Formspree maneja el estado de envío con 'state.submitting'
          disabled={state.submitting}
          className={`w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-lg font-medium text-white transition duration-200 ${
            state.submitting
              ? 'bg-gray-400 cursor-not-allowed'
              : 'bg-cyan-600 hover:bg-cyan-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-500 dark:bg-cyan-500 dark:hover:bg-cyan-600'
          }`}
        >
          {state.submitting ? 'Enviando...' : 'Enviar Mensaje'}
        </button>

        <ValidationError errors={state.errors} className="text-red-500 text-sm mt-3 text-center" />
      </div>
    </form>
  )
}

export default ContactForm
