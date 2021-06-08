(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{352:function(n,t,c){n.exports=c.p+"assets/img/macrecovery.b678b0e7.png"},353:function(n,t,c){n.exports=c.p+"assets/img/download-done.f41d862b.png"},378:function(n,t,c){n.exports=c.p+"assets/img/unknown-13.27dc87d9.png"},496:function(n,t,c){n.exports=c.p+"assets/img/unknown-5.42f6fd44.png"},497:function(n,t,c){n.exports=c.p+"assets/img/unknown-6.940e772c.png"},498:function(n,t,c){n.exports=c.p+"assets/img/unknown-8.dcced3da.png"},499:function(n,t,c){n.exports=c.p+"assets/img/unknown-9.0da434a7.png"},500:function(n,t,c){n.exports=c.p+"assets/img/unknown-11.42f6fd44.png"},501:function(n,t,c){n.exports=c.p+"assets/img/unknown-12.940e772c.png"},502:function(n,t,c){n.exports=c.p+"assets/img/unknown-14.dcced3da.png"},503:function(n,t,c){n.exports=c.p+"assets/img/unknown-15.a650fa8d.png"},504:function(n,t,c){n.exports=c.p+"assets/img/unknown-16.5bf1c76b.png"},505:function(n,t,c){n.exports=c.p+"assets/img/unknown-17.0da434a7.png"},506:function(n,t,c){n.exports=c.p+"assets/img/unknown-18.87d5a307.png"},507:function(n,t,c){n.exports=c.p+"assets/img/unknown-20.61737334.png"},508:function(n,t,c){n.exports=c.p+"assets/img/unknown-21.b01cadf2.png"},651:function(n,t,c){"use strict";c.r(t);var e=c(26),o=Object(e.a)({},(function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("ContentSlotsDistributor",{attrs:{"slot-key":n.$parent.slotKey}},[e("h1",{attrs:{id:"tao-bo-cai-trong-linux"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#tao-bo-cai-trong-linux"}},[n._v("#")]),n._v(" Tạo bộ cài trong Linux")]),n._v(" "),e("p",[n._v("Trong khi bạn không cần phải có macOS mới có thể sử dụng OpenCore, một số người lại thích có fresh slate và update boot manager của họ.")]),n._v(" "),e("p",[n._v("Để bắt đầu bạn cần những thứ sau:")]),n._v(" "),e("ul",[e("li",[n._v("Một USB 4GB")]),n._v(" "),e("li",[e("a",{attrs:{href:"https://github.com/acidanthera/OpenCorePkg/releases",target:"_blank",rel:"noopener noreferrer"}},[n._v("macrecovery.py"),e("OutboundLink")],1)])]),n._v(" "),e("h2",{attrs:{id:"tai-macos"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#tai-macos"}},[n._v("#")]),n._v(" Tải macOS")]),n._v(" "),e("p",[n._v("Để bắt đầu, đầu tiên cd vào "),e("a",{attrs:{href:"https://github.com/acidanthera/OpenCorePkg/releases",target:"_blank",rel:"noopener noreferrer"}},[n._v("thư mục chứa macrecovery"),e("OutboundLink")],1),n._v(" và chạy các lệnh sau đây:")]),n._v(" "),e("p",[e("img",{attrs:{src:c(352),alt:""}})]),n._v(" "),e("div",{staticClass:"language-sh extra-class"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[n._v("# Điều chỉnh lệnh bên dưới cho phù hợp")]),n._v("\n"),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[n._v("cd")]),n._v(" ~/Downloads/OpenCore-0/Utilities/macrecovery/\n")])])]),e("p",[n._v("Tiếp theo, chạy một trong những lệnh sau đây tùy vào bản macOS mà bạn muốn cài:")]),n._v(" "),e("div",{staticClass:"language-sh extra-class"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[n._v("# Lion(10.7):")]),n._v("\npython ./macrecovery.py -b Mac-2E6FAB96566FE58C -m 00000000000F25Y00 download\npython ./macrecovery.py -b Mac-C3EC7CD22292981F -m 00000000000F0HM00 download\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[n._v("# Mountain Lion(10.8):")]),n._v("\npython ./macrecovery.py -b Mac-7DF2A3B5E5D671ED -m 00000000000F65100 download\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[n._v("# Mavericks(10.9):")]),n._v("\npython ./macrecovery.py -b Mac-F60DEB81FF30ACF6 -m 00000000000FNN100 download\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[n._v("# Yosemite(10.10):")]),n._v("\npython ./macrecovery.py -b Mac-E43C1C25D4880AD6 -m 00000000000GDVW00 download\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[n._v("# El Capitan(10.11):")]),n._v("\npython ./macrecovery.py -b Mac-FFE5EF870D7BA81A -m 00000000000GQRX00 download\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[n._v("# Sierra(10.12):")]),n._v("\npython ./macrecovery.py -b Mac-77F17D7DA9285301 -m 00000000000J0DX00 download\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[n._v("# High Sierra(10.13)")]),n._v("\npython ./macrecovery.py -b Mac-7BA5B2D9E42DDD94 -m 00000000000J80300 download\npython ./macrecovery.py -b Mac-BE088AF8C5EB4FA2 -m 00000000000J80300 download\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[n._v("# Mojave(10.14)")]),n._v("\npython ./macrecovery.py -b Mac-7BA5B2DFE22DDD8C -m 00000000000KXPG00 download\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[n._v("# Catalina(10.15)")]),n._v("\npython ./macrecovery.py -b Mac-00BE6ED71E35EB86 -m 00000000000000000 download\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[n._v("# Latest version")]),n._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[n._v("# ie. Big Sur(11)")]),n._v("\npython ./macrecovery.py -b Mac-E43C1C25D4880AD6 -m 00000000000000000 download\n")])])]),e("p",[n._v("From here, run one of those commands in terminal and once finished you'll get an output similar to this:")]),n._v(" "),e("p",[e("img",{attrs:{src:c(353),alt:""}})]),n._v(" "),e("ul",[e("li",[e("p",[e("strong",[n._v("Lưu ý")]),n._v(": Tùy thuộc vào bản macOS, bạn sẽ thấy tệp BaseSystem hoặc RecoveryImage. Chúng đều có chức năng giống nhau nên mỗi khi chúng tôi nhắc đến BaseSystem thì They both act in the same manner so when we reference BaseSystem the same info apples to RecoveryImage")])]),n._v(" "),e("li",[e("p",[e("strong",[n._v("Lưu ý cho macOS 11, Big Sur")]),n._v(": Vì bản macOS này còn khá mới nên vẫn còn một số vấn đề với một số hệ thống cần giải quyết. Để biết thêm thông tin, hãy xem tại đây: "),e("RouterLink",{attrs:{to:"/extras/big-sur/"}},[n._v("OpenCore và macOS 11: Big Sur")])],1),n._v(" "),e("ul",[e("li",[n._v("Đối với newbie, chúng tôi khuyên dùng macOS 10.15, Catalina")])])]),n._v(" "),e("li",[e("p",[e("strong",[n._v("Lưu ý đối với Nvidia GPU")]),n._v(": Chắc chắn rằng  bạn đã xác minh xem phần cứng của bạn có hỗ trợ các bản macOS mới hơn hay không, hãy xem "),e("RouterLink",{attrs:{to:"/macos-limits.html"}},[n._v("Hardware Limitations")])],1)])]),n._v(" "),e("h2",{attrs:{id:"tao-bo-cai"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#tao-bo-cai"}},[n._v("#")]),n._v(" Tạo bộ cài")]),n._v(" "),e("p",[n._v("Phần này dành cho việc làm các phân vùng cần thiết cho ổ USB. Bạn có thể dùng phần mềm yêu thích của mình ví dụ như "),e("code",[n._v("gdisk")]),n._v(" "),e("code",[n._v("fdisk")]),n._v(" "),e("code",[n._v("parted")]),n._v(" "),e("code",[n._v("gparted")]),n._v(" hoặc "),e("code",[n._v("gnome-disks")]),n._v(". Bài hướng dẫn này sẽ chú trọng vào "),e("code",[n._v("gdisk")]),n._v(" vì nó khá tốt và bạn có thể thay đổi hệ thống tệp (file system) sau đó, bởi vì chúng ta cần nó để macOS Recovery HD có thể boot. (distro được dùng ở đây là Ubuntu 18.04, các phiên bản hoặc distro khác có thể được dùng)")]),n._v(" "),e("p",[n._v("Cảm ơn đến "),e("a",{attrs:{href:"https://github.com/midi1996",target:"_blank",rel:"noopener noreferrer"}},[n._v("midi1996"),e("OutboundLink")],1),n._v(" với bài hướng dẫn "),e("a",{attrs:{href:"https://midi1996.github.io/hackintosh-internet-install-gitbook/",target:"_blank",rel:"noopener noreferrer"}},[n._v("Internet Install Guide"),e("OutboundLink")],1),n._v(" mà bài này dựa trên")]),n._v(" "),e("h3",{attrs:{id:"cach-1"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#cach-1"}},[n._v("#")]),n._v(" Cách 1")]),n._v(" "),e("p",[n._v("Tại terminal:")]),n._v(" "),e("ol",[e("li",[n._v("chạy "),e("code",[n._v("lsblk")]),n._v(" và xác định USB block của bạn\n"),e("img",{attrs:{src:c(496),alt:"lsblk"}})]),n._v(" "),e("li",[n._v("chạy "),e("code",[n._v("sudo gdisk /dev/USB block của bạn>")]),n._v(" "),e("ol",[e("li",[n._v("nếu được hỏi về bảng phân vùng muốn sử dụng, chọn GPT.\n"),e("img",{attrs:{src:c(497),alt:"Select GPT"}})]),n._v(" "),e("li",[n._v("chọn "),e("code",[n._v("p")]),n._v(" để xem các phân vùng của usb block của bạn (và chắc chắn rằng đó là cái bạn cần)\n"),e("img",{attrs:{src:c(378),alt:""}})]),n._v(" "),e("li",[n._v("chọn "),e("code",[n._v("o")]),n._v(" để xóa bảng phân vùng và làm một bảng GPT mới (nếu không trống)\n"),e("ol",[e("li",[n._v("xác nhận với "),e("code",[n._v("y")]),n._v(" "),e("img",{attrs:{src:c(498),alt:""}})])])]),n._v(" "),e("li",[n._v("chọn "),e("code",[n._v("n")]),n._v(" "),e("ol",[e("li",[e("code",[n._v("partition number")]),n._v(": giữ nguyên")]),n._v(" "),e("li",[e("code",[n._v("first sector")]),n._v(": giữ nguyên")]),n._v(" "),e("li",[e("code",[n._v("last sector")]),n._v(": giữ nguyên")]),n._v(" "),e("li",[e("code",[n._v("Hex code or GUID")]),n._v(": "),e("code",[n._v("0700")]),n._v(" để chọn FAT32")])])]),n._v(" "),e("li",[n._v("chọn "),e("code",[n._v("w")]),n._v(" "),e("ul",[e("li",[n._v("Xác nhận với "),e("code",[n._v("y")]),n._v(" "),e("img",{attrs:{src:c(499),alt:""}})]),n._v(" "),e("li",[n._v("Hiếm khi bạn cần khởi động lại máy tính, nhưng để chắc chắn, khởi động lại. Bạn cũng có thể thử cắm lại ổ USB")])])]),n._v(" "),e("li",[n._v("Thoát "),e("code",[n._v("gdisk")]),n._v(" bằng cách chọn "),e("code",[n._v("q")]),n._v(" (thường nó sẽ tự thoát)")])])]),n._v(" "),e("li",[n._v("Dùng "),e("code",[n._v("lsblk")]),n._v(" để xác định mã định danh của phân vùng")]),n._v(" "),e("li",[n._v("chạy "),e("code",[n._v('sudo mkfs.vfat -F 32 -n "OPENCORE" /dev/<block phân vùng USB của bạn>')]),n._v(" để định dạng USB của bạn thành FAT32 và đặt tên cho nó là OPENCORE")]),n._v(" "),e("li",[n._v("sau đó "),e("code",[n._v("cd")]),n._v(" đến "),e("code",[n._v("/OpenCore/Utilities/macrecovery/")]),n._v(" và bạn sẽ thấy file "),e("code",[n._v(".dmg")]),n._v(" và "),e("code",[n._v(".chunklist")]),n._v(" "),e("ol",[e("li",[n._v("gắn phân vùng USB của bạn với "),e("code",[n._v("udisksctl")]),n._v(" ("),e("code",[n._v("udisksctl mount -b /dev/<block phân vùng USB của bạn>")]),n._v(", thường không cần sudo) hoặc với"),e("code",[n._v("mount")]),n._v(" ("),e("code",[n._v("sudo mount /dev/<block phân vùng USB của bạn> /nơi/bạn/muốn/gắn")]),n._v(", cần sudo)")]),n._v(" "),e("li",[e("code",[n._v("cd")]),n._v(" đến ổ USB của bạn và chạy "),e("code",[n._v("mkdir com.apple.recovery.boot")]),n._v(" ở trong thư mục gốc của phân vùng FAT32")]),n._v(" "),e("li",[n._v("bây giờ chạy "),e("code",[n._v("cp")]),n._v(" hoặc "),e("code",[n._v("rsync")]),n._v(" cả "),e("code",[n._v("BaseSystem.dmg")]),n._v(" và "),e("code",[n._v("BaseSystem.chunklist")]),n._v(" vào thư mục "),e("code",[n._v("com.apple.recovery.boot")]),n._v(".")])])])]),n._v(" "),e("h3",{attrs:{id:"cach-2-trong-truong-hop-cach-1-khong-dung-đuoc"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#cach-2-trong-truong-hop-cach-1-khong-dung-đuoc"}},[n._v("#")]),n._v(" Cách 2 (trong trường hợp cách 1 không dùng được)")]),n._v(" "),e("p",[n._v("Tại terminal:")]),n._v(" "),e("ol",[e("li",[n._v("chạy "),e("code",[n._v("lsblk")]),n._v(" và xác định USB block của bạn\n"),e("img",{attrs:{src:c(500),alt:""}})]),n._v(" "),e("li",[n._v("chạy "),e("code",[n._v("sudo gdisk /dev/USB block của bạn>")]),n._v(" "),e("ol",[e("li",[n._v("nếu được hỏi về bảng phân vùng muốn sử dụng, chọn GPT.\n"),e("img",{attrs:{src:c(501),alt:""}})]),n._v(" "),e("li",[n._v("chọn "),e("code",[n._v("p")]),n._v(" để xem các phân vùng của usb block của bạn (và chắc chắn rằng đó là cái bạn cần)\n"),e("img",{attrs:{src:c(378),alt:""}})]),n._v(" "),e("li",[n._v("chọn "),e("code",[n._v("o")]),n._v(" để xóa bảng phân vùng và làm một bảng GPT mới (nếu không trống)\n"),e("ol",[e("li",[n._v("xác nhận với "),e("code",[n._v("y")]),n._v(" "),e("img",{attrs:{src:c(502),alt:""}})])])]),n._v(" "),e("li",[n._v("chọn "),e("code",[n._v("n")]),n._v(" "),e("ol",[e("li",[n._v("partition number: giữ nguyên")]),n._v(" "),e("li",[n._v("first sector: giữ nguyên")]),n._v(" "),e("li",[n._v("last sector: "),e("code",[n._v("+200M")]),n._v(" để tạo phân vùng 200mb mà sau đó sẽ được đặt tên là OPENCORE")]),n._v(" "),e("li",[n._v("Hex code or GUID: "),e("code",[n._v("0700")]),n._v(" để chọn FAT32\n"),e("img",{attrs:{src:c(503),alt:""}})])])]),n._v(" "),e("li",[n._v("chọn "),e("code",[n._v("n")]),n._v(" "),e("ol",[e("li",[n._v("partition number: giữ nguyên")]),n._v(" "),e("li",[n._v("first sector: giữ nguyên")]),n._v(" "),e("li",[n._v("last sector: giữ nguyên (hoặc bạn có thể đặt"),e("code",[n._v("+3G")]),n._v(" nếu bạn muốn phân vùng tiếp ổ USB)")]),n._v(" "),e("li",[n._v("Hex code or GUID: "),e("code",[n._v("af00")]),n._v(" để chọn Apple HFS/HFS+\n"),e("img",{attrs:{src:c(504),alt:""}})])])]),n._v(" "),e("li",[n._v("chọn "),e("code",[n._v("w")]),n._v(" "),e("ul",[e("li",[n._v("xác nhận với "),e("code",[n._v("y")]),n._v(" "),e("img",{attrs:{src:c(505),alt:""}})]),n._v(" "),e("li",[n._v("Hiếm khi bạn cần khởi động lại máy tính, nhưng để chắc chắn, khởi động lại. Bạn cũng có thể thử cắm lại ổ USB.")])])]),n._v(" "),e("li",[n._v("Thoát "),e("code",[n._v("gdisk")]),n._v(" bằng cách chọn "),e("code",[n._v("q")]),n._v(" (thường nó sẽ tự thoát)")])])]),n._v(" "),e("li",[n._v("Chạy "),e("code",[n._v("lsblk")]),n._v(" một lần nữa to để xác định phân vùng 200mb và phân vùng còn lại\n"),e("img",{attrs:{src:c(506),alt:""}})]),n._v(" "),e("li",[n._v("chạy "),e("code",[n._v('sudo mkfs.vfat -F 32 -n "OPENCORE" /dev/<your 200MB partition block>')]),n._v(" để định dạng phân vùng này thành FAT32 và đặt tên nó là OPENCORE")]),n._v(" "),e("li",[n._v("sau đó "),e("code",[n._v("cd")]),n._v(" đến "),e("code",[n._v("/OpenCore/Utilities/macrecovery/")]),n._v(" và bạn sẽ thấy file "),e("code",[n._v(".dmg")]),n._v(" and "),e("code",[n._v(".chunklist")]),n._v(" "),e("ol",[e("li",[n._v("gắn phân vùng USB của bạn với "),e("code",[n._v("udisksctl")]),n._v(" ("),e("code",[n._v("udisksctl mount -b /dev/<block phân vùng USB của bạn>")]),n._v(", thường không cần sudo) hoặc với"),e("code",[n._v("mount")]),n._v(" ("),e("code",[n._v("sudo mount /dev/<block phân vùng USB của bạn> /nơi/bạn/muốn/gắn")]),n._v(", cần sudo)")]),n._v(" "),e("li",[e("code",[n._v("cd")]),n._v(" đến ổ USB của bạn và chạy "),e("code",[n._v("mkdir com.apple.recovery.boot")]),n._v(" ở trong thư mục gốc của phân vùng FAT32")]),n._v(" "),e("li",[n._v("tải "),e("code",[n._v("dmg2img")]),n._v(" (có sẵn trong hầu hết distro)")]),n._v(" "),e("li",[n._v("chạy "),e("code",[n._v("dmg2img -l BaseSystem.dmg")]),n._v(" và chọn phân vùng có thuộc tính "),e("code",[n._v("disk image")]),n._v(" "),e("img",{attrs:{src:c(507),alt:""}})]),n._v(" "),e("li",[n._v("chạy "),e("code",[n._v("dmg2img -p <the partition number> -i BaseSystem.dmg -o <block phân vùng 3GB+>")]),n._v(" để giải nén và ghi ảnh recovery đến phân vùng\n"),e("ul",[e("li",[n._v("Nó sẽ mất khá nhiều thời gian, RẤT NHIỀU nếu bạn dùng ổ USB chậm (tôi mất khoảng 5p với một ổ USB 2.0 khá nhanh).\n"),e("img",{attrs:{src:c(508),alt:""}})])])])])])]),n._v(" "),e("h2",{attrs:{id:"tiep-theo-hay-đi-đen-setting-up-the-efi-đe-tiep-tuc"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#tiep-theo-hay-đi-đen-setting-up-the-efi-đe-tiep-tuc"}},[n._v("#")]),n._v(" Tiếp theo, hãy đi đến "),e("RouterLink",{attrs:{to:"/installer-guide/opencore-efi.html"}},[n._v("Setting up the EFI")]),n._v(" để tiếp tục")],1)])}),[],!1,null,null,null);t.default=o.exports}}]);