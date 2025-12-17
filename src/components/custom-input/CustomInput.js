import { Input } from "@/components/ui/input";

export default function CustomInput({config}){
    const {id, type, placeholder} = config;
    return(
        <Input id={id}  type={type} placeholder={placeholder} />
    )
}