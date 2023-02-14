import { HeaderContainer } from './styles';

export function Header() {
  return (
    <HeaderContainer>
      <div>
        <img src="/left-effect.png" alt="" aria-hidden="true" tabIndex={-1} />
      </div>
      <div>
        <img src="/right-effect.png" alt="" aria-hidden="true" tabIndex={-1} />
      </div>
    </HeaderContainer>
  );
}
