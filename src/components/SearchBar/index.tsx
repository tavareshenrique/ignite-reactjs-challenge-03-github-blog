import * as Label from '@radix-ui/react-label';

import { usePost } from '../../hooks';

import {
  SearchBarContainer,
  SearchBarContent,
  PostCountText,
  SearchBarInput,
} from './styles';

export function SearchBar() {
  const { totalPosts, searchPosts } = usePost();

  const totalPostsText = totalPosts === 1 ? 'publicação' : 'publicações';

  return (
    <SearchBarContainer aria-label="Search Bar">
      <SearchBarContent>
        <Label.Root className="label-container" htmlFor="search">
          Publicações
        </Label.Root>

        <PostCountText>
          {totalPosts} {totalPostsText}
        </PostCountText>
      </SearchBarContent>

      <SearchBarInput
        placeholder="Buscar conteúdo"
        type="text"
        id="search"
        onChange={(event) => searchPosts(event.target.value)}
      />
    </SearchBarContainer>
  );
}
