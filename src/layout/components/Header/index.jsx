const Header = () => {
  //nhúng taiwincss tạo file css Hỏi chat gpt nhúng @...
  return (
    <div>
      <header class="mb-6 flex items-center justify-between">
        <div class="flex items-center">
          <img
            src="https://storage.googleapis.com/a1aa/image/NXi02uF62EpVBp0ES04zjuGZErU4G22nDwUlg41VYmlTK17E.jpg"
            alt="Company logo"
            class="mr-4"
            width="50"
            height="50"
          />
          <h1 class="text-2xl font-bold">Nội Thất An Nam</h1>
        </div>
        <nav>
          <ul class="flex space-x-4">
            <li>
              <a href="#" class="text-blue-500">
                Trang Chủ
              </a>
            </li>
            <li>
              <a href="#" class="text-blue-500">
                Giới Thiệu
              </a>
            </li>
            <li>
              <a href="#" class="text-blue-500">
                Sản Phẩm
              </a>
            </li>
            <li>
              <a href="#" class="text-blue-500">
                Liên Hệ
              </a>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
};

export default Header;
