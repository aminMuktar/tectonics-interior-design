"use client"
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";


type FormInput = {
    name: string;
    email: string;
    message: string;
  };

export default function Contact(){
    const {
        register,
        handleSubmit,
        formState: { isSubmitting },
        reset,
      } = useForm<FormInput>();
      async function onSubmit(formData: FormInput) { 
        await fetch('/api/send', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
    
          body: JSON.stringify({
            name: formData.name,
            email: formData.email,
            message: formData.message,
          }),
        }).then(() => {

            toast.success('Your email message has been sent successfully');
        });
    
        reset();
      }
    return (
        <>
        <section className="pt-10 bg-black">
            <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
                <h2 className="mb-4 text-4xl tracking-tight text-white font-extrabold text-center">Contact Us</h2>
                <p className="mb-8 lg:mb-16 font-light text-center text-gray-500 sm:text-xl"> Want to send feedback about our service? Need details about our Business? Let us know.</p>
                <form action="#" className="space-y-8" onSubmit={handleSubmit(onSubmit)}>
                        <div
                            className="relative p-1.5 my-10  flex  items-center gap-y-4 h-auto md:h-16 flex-col md:flex-row bg-transparent justify-between rounded-full md:shadow-[0px 15px 30px -4px rgba(16, 24, 40, 0.03)] border border-gray-600 transition-all duration-500 hover:border-blue-600 focus-within:border-blue-600">
                            <input type="text" {...register('email')} name="email" placeholder="Enter your email"
                            className="text-base rounded-full text-gray-200 flex-1 py-4 px-6 bg-transparent shadow-none placeholder:text-gray-400 focus:border-blue-500 focus:outline-none md:w-fit w-full" />
                        </div>
                        <div
                            className="relative p-1.5 my-10  flex  items-center gap-y-4 h-auto md:h-16 flex-col md:flex-row bg-transparent justify-between rounded-full md:shadow-[0px 15px 30px -4px rgba(16, 24, 40, 0.03)] border border-gray-600 transition-all duration-500 hover:border-blue-600 focus-within:border-blue-600">
                            <input type="text" {...register('name')} name="name" placeholder="Full Name"
                            className="text-base rounded-full text-gray-200 flex-1 py-4 px-6 bg-transparent shadow-none placeholder:text-gray-400 focus:border-blue-500 focus:outline-none md:w-fit w-full" />
                        </div>
                    <div className="sm:col-span-2">
                        <textarea id="message" {...register('message')} rows={6} className="block p-2.5 w-full text-base text-gray-200 bg-transparent rounded-lg shadow-sm border border-gray-600 focus:border-blue-500 focus:outline-none" placeholder="Leave a comment..."></textarea>
                    </div>
                    <button type="submit" disabled={isSubmitting} className="py-3 px-5 text-sm font-medium text-center text-black rounded-lg bg-white sm:w-fit hover:bg-gray-100">Send message</button>
                </form>
            </div>
            </section>
        </>
    );
}