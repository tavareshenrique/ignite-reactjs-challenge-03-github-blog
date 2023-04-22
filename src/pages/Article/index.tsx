import {
  FaCalendarDay,
  FaChevronLeft,
  FaComment,
  FaExternalLinkAlt,
  FaGithub,
} from 'react-icons/fa';

import { Link, Badge } from '../../components';

import { ArticleBody, ArticleHeader, LinksContent, Title } from './styles';

export function Article() {
  return (
    <>
      <ArticleHeader>
        <LinksContent>
          <Link href="/">
            <FaChevronLeft size={12} />
            <span>Voltar</span>
          </Link>
          <Link href="/" target="_blank">
            <span>VER NO GITHUB</span>
            <FaExternalLinkAlt size={12} />
          </Link>
        </LinksContent>

        <Title>JavaScript data types and data structures</Title>

        <Badge.Root>
          <Badge.Badge
            ariaLabel="Nome de usuário no Github do Henrique Tavares."
            icon={<FaGithub size={16} />}
            text="tavareshenrique"
          />
          <Badge.Badge
            ariaLabel="Foi publicado há 1 dia."
            icon={<FaCalendarDay size={16} />}
            text="Há 1 dia"
          />
          <Badge.Badge
            ariaLabel="Possui 5 comentários."
            icon={<FaComment size={16} />}
            text="5 comentarios"
          />
        </Badge.Root>
      </ArticleHeader>

      <ArticleBody>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vitae
          suscipit deserunt itaque adipisci repellat vel ducimus in
          reprehenderit quod doloremque. Cupiditate nesciunt maiores nobis vero
          pariatur itaque hic repellat, voluptatibus, neque saepe deleniti
          ipsum, consequuntur cumque eligendi animi dicta. Quisquam cum corrupti
          quo esse accusantium consequatur blanditiis reprehenderit saepe
          assumenda perferendis laboriosam nesciunt aspernatur a aperiam magni
          officiis repellendus fugiat nam ipsa odit, sapiente possimus qui?
          Dolorum architecto aperiam hic minus. Distinctio perspiciatis
          repellendus praesentium error iure delectus minus, asperiores sint
          vitae ipsam aperiam laboriosam id beatae, omnis culpa vel quo
          molestiae veritatis animi dolor assumenda voluptatum optio ea. Soluta
          exercitationem autem eum, temporibus doloribus odit voluptates
          accusantium pariatur placeat, totam maxime vero, sit itaque voluptate
          deleniti expedita. Quos quaerat at doloribus ipsa. Ipsam tempora
          sapiente similique veritatis. Nisi repellendus deleniti ipsam
          reprehenderit omnis, nulla aspernatur quibusdam ipsa magnam quis
          aliquid perferendis quod sequi ducimus dolor et quo. Harum itaque
          dignissimos cumque voluptate placeat, rem hic similique, quaerat
          mollitia unde aliquid nobis ea architecto dolores deserunt. Deserunt
          exercitationem eum libero veritatis blanditiis, in tempore atque
          repellat animi nemo eligendi, at, laborum nihil earum quos sapiente
          similique. Aspernatur veritatis hic laborum eum quod fuga, incidunt
          ipsam a! Qui, quidem? Voluptates iure earum voluptatem temporibus
          numquam qui praesentium optio repellendus doloribus voluptatum,
          placeat mollitia nemo consequuntur odio asperiores! Minima
          voluptatibus reiciendis, praesentium nobis ipsa totam eveniet beatae
          fuga libero, dolor amet, similique quo nemo quod expedita! Pariatur
          voluptatum illo alias nulla corrupti hic vel ipsam molestias
          architecto, beatae explicabo, sit nihil qui iusto ullam earum sunt
          repellendus non itaque laudantium nostrum quo aspernatur expedita
          distinctio? Magnam exercitationem voluptatum ut, nulla consequatur at
          fugiat beatae facilis obcaecati minus accusamus dolores dolorem! Nemo
          eaque aliquam harum sed, placeat cumque inventore esse qui libero
          officia optio quis non porro sit dolores obcaecati, veniam delectus
          rerum amet recusandae dolorem pariatur voluptates. Natus iure ut iste
          omnis numquam consequatur laudantium nobis neque maiores vero veniam
          asperiores incidunt eaque quos, praesentium esse molestiae voluptatum,
          quo architecto ea ad consequuntur obcaecati. Magnam placeat at, ea quo
          distinctio suscipit quidem illo, assumenda laboriosam nobis ipsa
          explicabo quod fuga sequi velit blanditiis aspernatur possimus
          praesentium ut quibusdam adipisci. A mollitia, repudiandae ex
          laudantium tempora suscipit dolore accusamus eligendi, beatae sed aut
          sapiente nobis voluptate nam expedita cum, dicta labore autem quos.
          Nemo autem, officiis, suscipit dolore voluptatum excepturi totam
          dignissimos voluptate provident sapiente, eligendi ut ea dolores
          magnam distinctio vero sit natus tempora perspiciatis iste architecto
          reprehenderit! Ipsa pariatur nihil tempore! Accusantium nemo quos
          officia error totam repudiandae nobis quaerat consectetur rem
          suscipit! Officia perspiciatis laborum non saepe esse rerum illo quia
          porro, laboriosam odit iusto, earum enim tenetur, voluptatibus labore
          minus vero dolorem amet numquam sit libero temporibus aliquid illum
          possimus? Consequuntur amet ipsum quisquam quidem vitae? Facilis illum
          at error voluptate saepe, voluptatum odio explicabo numquam asperiores
          corrupti cumque non consequuntur aliquid reiciendis! Quia, expedita
          libero, quas ad eligendi maxime sequi nemo iusto nisi enim esse! Sequi
          vitae debitis, iste inventore fuga delectus. Magnam assumenda vel
          velit illo minus.
        </p>
      </ArticleBody>
    </>
  );
}
