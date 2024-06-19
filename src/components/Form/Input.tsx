<<<<<<< HEAD
import { FormControl, FormLabel, Input as ChakraInput, InputProps as ChakraInputProps, FormErrorMessage } from "@chakra-ui/react"
import { ForwardRefRenderFunction, forwardRef } from "react"

interface  InputProps extends ChakraInputProps {
    name: string,
    label?: string,
    error?: string 
}
const InputBase:ForwardRefRenderFunction<HTMLInputElement, InputProps> = ({ name, label, error, ...rest }, ref) => {
    return (
        <FormControl isInvalid={!!error}>
            { !!label && <FormLabel htmlFor={name}>{label}</FormLabel>}
            <ChakraInput
              id={name}
              name={name
              }
              focusBorderColor='pink.500'
              bg="gray.900"
              variant="filled"
              _hover={{bgColor:
              'gray.900'}}
              size="lg"
              {...rest}
              ref={ref} 
              />
              {!!error && <FormErrorMessage>{error}</FormErrorMessage>}
=======
import { FormControl, FormLabel, Input as ChakraInput, InputProps as ChakraInputProps } from "@chakra-ui/react"

interface  InputProps extends ChakraInputProps {
    name: string,
    label?: string
}

export function Input ({ name, label, ...rest }: InputProps) {
    return (
        <FormControl>
            { !!label && <FormLabel htmlFor={name}>{label}</FormLabel>}
            <ChakraInput id={name} name={name }type='email' focusBorderColor='pink.500' bg="gray.900" variant="filled" 
             _hover={{bgColor: 'gray.900'}} size="lg"
             {...rest}
            />
>>>>>>> 9098ce062b7c786c8063731df259d4652e885888
        </FormControl>
    )
}

<<<<<<< HEAD
export const Input = forwardRef(InputBase)
=======
export default Input
>>>>>>> 9098ce062b7c786c8063731df259d4652e885888
