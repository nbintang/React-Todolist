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
    <main className={`flex relative  dark:bg-gray-900 bg-gray-200  justify-center flex-col items-center h-screen `}>
      <HomeLayout>
        <Title className={"text-3xl sm:text-5xl"}>
          My Todos
        </Title>
        <div className="wrapper">
          <Input />
          <ListSlide />
          <div className="wrap-list no-scrollbar overflow-auto h-96 sm:h-[450px] ">
            <SliderPages />
          </div>
        </div>
      </HomeLayout>
      <div>
        <Footer />
      </div>
    </main>
  )
}

export default App;



