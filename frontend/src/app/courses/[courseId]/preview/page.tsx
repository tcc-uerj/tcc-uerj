export default function CoursePreview() {
  return (
    <div className="flex justify-center">
      <div className="w-3/6 h-fit mt-5 p-5">
          <h2 className="text-[20px] font-medium">Nome do Curso</h2>
          <div className="flex items-center gap-2 mt-2">
              <h2 className="text-[12px] text-gray-400">Duração: XXhrs</h2>
          </div>
          <p className="mt-5 text-gray-500">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus sollicitudin diam a orci tincidunt, id molestie diam sollicitudin. Nulla facilisi. Proin sodales sapien erat, ac placerat mi euismod et. Vestibulum porta laoreet urna, non sollicitudin tellus. Ut hendrerit ullamcorper ligula vel fermentum. Proin porttitor, mauris in commodo mattis, augue metus pellentesque tellus, dignissim luctus tellus velit venenatis nisl. Proin commodo, ante vitae dictum cursus, libero nisi gravida neque, in commodo nisl nibh ac metus. Etiam pulvinar vehicula massa, imperdiet luctus quam tincidunt sed. Duis vel porttitor enim. Integer nec pellentesque ante, sed euismod ex. Vivamus justo tellus, finibus ac dui non, fermentum rhoncus ex. Aenean consectetur risus eget ultrices imperdiet. Curabitur ullamcorper eu turpis luctus bibendum. Morbi nec blandit nisl. Mauris molestie tincidunt lectus, quis suscipit massa condimentum at. Nunc ultricies ipsum sit amet nulla pellentesque iaculis.
          </p>
          <div className="mt-5">
              <button className="rounded px-3 py-2.5 text-base font-semibold leading-7 text-white-900 bg-blue-500 hover:bg-blue-700">
                  Me inscrever
              </button>
          </div>
      </div>
    </div>
  )
}
