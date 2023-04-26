import headerBgImage from '../../assets/header-bg.png';
import headerBgMobileImage from '../../assets/header-bg-mobile.png';

import { HeaderContainer } from './styles';

export function Header() {
  return (
    <HeaderContainer aria-hidden="true">
      <picture>
        <source srcSet={headerBgMobileImage} media="(max-width: 768px)" />
        <img src={headerBgImage} alt="Github Blog" width="100%" height={296} />
      </picture>
    </HeaderContainer>
  );
}
