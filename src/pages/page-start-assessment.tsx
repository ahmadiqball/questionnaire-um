import { useNavigate } from "react-router-dom";
import { Button } from "../components/button";
import { InputRadio, InputText } from "../components/input";
import { SubmitHandler, useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from '@hookform/resolvers/zod';

interface Inputs {
  name: string;
  age: number;
  gender: string;
  school: string;
  token: string;
}

const validationSchema = z.object({
  name: z.string().trim().min(1),
  age: z.string().transform(val => parseInt(val)).refine(val => val > 0),
  gender: z.string(),
  school: z.string().trim().min(1),
  token: z.string().length(6)
})

export function PageStartAssessment() {
  const navigate = useNavigate();
  const { 
    register, 
    handleSubmit, 
    formState: { errors, dirtyFields }
  } = useForm<Inputs>({
      mode: 'onChange', resolver: zodResolver(validationSchema)
  });

    
  const onSubmit: SubmitHandler<Inputs> = (data) => {
    console.log("🚀 ~ file: page-start-assessment.tsx:39 ~ PageStartAssessment ~ data:", data)

    navigate(`/assessment/${data.token}`)
  }

  return(
    <main className="w-full min-h-screen bg-[url(/assets/background-dark.svg)] bg-center bg-cover bg-no-repeat">    
      <div className="py-10 min-h-screen flex justify-center items-center bg-[#0A0A0A] bg-opacity-80">
        <div className="rounded-lg border border-purple bg-[#F6F5FD] w-[90%] sm:w-auto py-6 px-8">
          <h2 className="text-black text-4xl font-bold">Mulai Asesmen</h2>
          <p className="text-[#404040] text-base mt-6 mb-10 max-w-[367px]">Masukkan biodata kamu dengan lengkap untuk mengakses asesmen</p>
          
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="flex gap-2">
              <InputText label="Nama" placeholder="Ex. JennieKim" className="w-full" {...register('name')} error={errors.name} dirtyFields={dirtyFields.name}/>
              <InputText label="Usia" placeholder="Ex. 13" className="w-[100px]" type="text" {...register('age')} error={errors.age} dirtyFields={dirtyFields.age}/>
            </div>

            <InputRadio options={['Laki-laki', 'Perempuan']} label="Jenis kelamin" className="mt-[14px]" {...register('gender')} error={errors.gender}/>
            <InputText label="Asal Universitas" placeholder="Ex. Universitas Asal Kamu"  className="mt-[14px]" {...register('school')} error={errors.school} dirtyFields={dirtyFields.school}/>
            <InputText label="Token" placeholder="Ex. 123456" className="mt-[14px]" {...register('token')} error={errors.token} dirtyFields={dirtyFields.token}/>
            
            <Button className="mt-10 w-full sm:w-full" type='submit'>Lanjut</Button>
          </form>

        </div>
      </div>
    </main>
  )
}