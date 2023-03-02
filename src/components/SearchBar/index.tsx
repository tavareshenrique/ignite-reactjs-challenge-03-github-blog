import * as Label from '@radix-ui/react-label';

import {
  SearchBarContainer,
  SearchBarContent,
  PostCountText,
  SearchBarInput,
} from './styles';

export function SearchBar() {
  return (
    <SearchBarContainer>
      <SearchBarContent>
        <Label.Root className="label-container" htmlFor="search">
          Publicações
        </Label.Root>

        <PostCountText>6 publicações</PostCountText>
      </SearchBarContent>

      <SearchBarInput placeholder="Buscar conteúdo" type="text" id="search" />
    </SearchBarContainer>
  );
}
