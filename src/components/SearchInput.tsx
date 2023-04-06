import { CloseIcon, SearchIcon } from "@chakra-ui/icons";
import { InputGroup, InputLeftElement, Input, HStack, InputRightElement } from "@chakra-ui/react";
import { useRef } from "react";

interface Props {
  onSearch: (searchText: string) => void;
}

const SearchInput = ({ onSearch }: Props) => {
  const inputRef = useRef<HTMLInputElement>(null);

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        if (inputRef.current?.value) onSearch(inputRef.current.value);
      }}
    >
      <HStack>
        <InputGroup width='100%'>
          <InputLeftElement
            pointerEvents="none"
            children={<SearchIcon color="gray.300" />}
          />

          <Input ref={inputRef} />

          <InputRightElement>
            <CloseIcon color="gray.400" cursor="pointer" boxSize="3" onClick={() => {
              if(inputRef.current?.value) inputRef.current!.value = ""
            }} />
          </InputRightElement>
        </InputGroup>
      </HStack>
    </form>
  );
};

export default SearchInput;
