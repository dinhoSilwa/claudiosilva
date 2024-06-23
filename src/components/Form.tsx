import { ButtonCTA } from "./Button"
import { Title } from "./Title"

export const Form = () =>{
  return(
    <>
    <section className='bg-external h-auto py-20 flex flex-col gap-10'>
<Title>{"Entre em Contato".toUpperCase()}</Title>

<form className='bg-white font-source flex flex-col gap-2 w-[90%] ml-auto mr-auto py-10 rounded-lg shadow-lg'>
<fieldset className='flex flex-col gap-2 px-4 mb-4'>
  <label htmlFor="seu-nome" className='px-2 font-bold text-zinc-600 py-1'>Nome:</label>
  <input type="text" id='seu-nome' className='py-4 bg-zinc-200 rounded-md text-medium font-semibold text-zinc-800 font-source pl-2 placeholder:text-zinc-500 placeholder:font-source' placeholder='Digite o seu nome' />
</fieldset>

<fieldset className='flex flex-col gap-2 px-4 mb-4'>
  <label htmlFor="seu-email" className='px-2 font-bold text-zinc-600 py-1'>Email:</label>
  <input type="text" id='seu-email' className='py-4 bg-zinc-200 rounded-md text-medium font-semibold text-zinc-800 font-source pl-2 placeholder:text-zinc-500 placeholder:font-source' placeholder='Digite o seu Email' />
</fieldset>

<fieldset className='flex flex-wrap gap-2 px-4 mb-4'>
<legend className='font-bold text-zinc-600 py-4'>Tipo de Projeto :</legend>

<label className='cursor-poiter px-4 flex text-zinc-800 font-bold bg-zinc-200 py-2 rounded-md' htmlFor="frontend">Front-end</label>
<input type="checkbox" className='hidden' id='frontend' />

<label className='cursor-poiter px-4 flex text-zinc-800 font-bold bg-zinc-200 py-2 rounded-md' htmlFor="ui-ux">Ui/ux design</label>
<input type="checkbox" className='hidden' id='ui-ux' />

<label className='cursor-poiter px-4 flex text-zinc-800 font-bold bg-zinc-200 py-2 rounded-md' htmlFor="freelancer">Frelancer</label>
<input type="checkbox" className='hidden' id='freelancer' />

<label className='cursor-poiter px-4 flex text-zinc-800 font-bold bg-zinc-200 py-2 rounded-md' htmlFor="fcontrato-clt">Contrato CLT</label>
<input type="checkbox" className='hidden' id='fcontrato-clt' />

<label className='cursor-poiter px-4 flex text-zinc-800 font-bold bg-zinc-200 py-2 rounded-md' htmlFor="contrato-pj">Contrato PJ</label>
<input type="checkbox" className='hidden' id='contrato-pj' />

<label className='cursor-poiter px-4 flex text-zinc-800 font-bold bg-zinc-200 py-2 rounded-md' htmlFor="Outro">Outro</label>
<input type="checkbox" className='hidden' id='Outro' />


</fieldset>

<fieldset className='flex flex-col gap-2 font-source px-4'>
<legend className='font-bold text-zinc-600 py-2'>Mensagem :</legend>
  <textarea className=' font-source h-20 px-4 py-2 w-[90%] bg-zinc-200 rounded-md text-medium text-zinc-800 font-semibold' cols={2} placeholder='Digite a sua Mensagem'></textarea>
</fieldset>
<fieldset className='flex gap-2 font-source px-4 justify-center h-32 items-center'>
  <ButtonCTA size='medium'>{"Enviar".toUpperCase()}</ButtonCTA>
</fieldset>
</form>
</section>
    </>
  )
}