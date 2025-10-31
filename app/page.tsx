import { Container, Title, TopBar } from "@/components/shared";
import {Filters} from '@/components/shared/filters'


export default function Home() {
  return <>
    <Container className="mt-10">
      <Title text='Все пиццы' size="lg" className="flex items-center gap-4 font-extrabold"/>
            <TopBar/>


    </Container>

    <Container className="mt-10 pb-14">
      <div className="flex pap-[60px]">

        {/* Фильтрация */}
        <div className="w-[250px]">
          <Filters/>
        </div>
      {/* Список товаров */}
      <div className="flex-1">
        <div className="flex flex-col gap-16">
          Список товаров
        </div>

      </div>
      </div>

    </Container>
  </>;
}
