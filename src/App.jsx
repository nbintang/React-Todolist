import {
  Title,
  Input,
  ListSlide,
  SliderPages,
  Footer,
  HomeLayout
} from "./components/export/ExportModule";


function App() {
  return (
    <main className={`flex static justify-center py-2 flex-col items-center  dark:bg-gray-900 bg-gray-200 h-full sm:h-screen pb-2`}>
      <HomeLayout>
        <Title className={"text-3xl sm:text-5xl"}>
          My Todos
        </Title>
        <div className="wrapper">
          <Input />
          <ListSlide />
          <div className="wrap-list no-scrollbar overflow-auto h-[390px] sm:h-[450px] ">
            <SliderPages />
          </div>
        </div>
      </HomeLayout>
      <div className="py-2">
        <Footer />
      </div>
    </main>
  )
}

export default App;



