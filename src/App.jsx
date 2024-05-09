import {
  Title,
  Input,
  ListSlide,
  SliderPages,
  Footer,
  HomeLayout
} from "./components/export/ExportModule";
import SkeletonLayout from "./components/Layout/Skeleton";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <main className={`flex static justify-start sm:justify-center py-2 flex-col items-center  dark:bg-gray-900 bg-gray-200 h-[110vh] sm:h-screen pb-2`}>
      <SkeletonLayout className={''}>
        <HomeLayout>
          <Toaster position="bottom-left" reverseOrder={false}/>
          <Title className={"text-3xl sm:text-5xl"}>
            My Todos
          </Title>
          <div className="wrapper">
            <Input />
            <ListSlide />
            <div className="wrap-list no-scrollbar rounded-md bg-gray-300 dark:bg-gray-800 overflow-auto h-[390px] sm:h-[450px] ">
              <SliderPages />
            </div>
          </div>
        </HomeLayout>
        <div className="py-2">
          <Footer />
        </div>
      </SkeletonLayout>
    </main>
  )
}

export default App;



