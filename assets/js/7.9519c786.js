(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{356:function(t,n,a){t.exports=a.p+"assets/img/format-usb.83a24b13.png"},518:function(t,n,a){t.exports=a.p+"assets/img/munki.cb5c523a.png"},519:function(t,n,a){t.exports=a.p+"assets/img/munki-process.c0791880.png"},520:function(t,n,a){t.exports=a.p+"assets/img/munki-done.581ad405.png"},521:function(t,n,a){t.exports=a.p+"assets/img/munki-dmg.893a0e5d.png"},522:function(t,n,a){t.exports=a.p+"assets/img/download.974b60da.png"},523:function(t,n,a){t.exports=a.p+"assets/img/boot-disk.73bf04f5.png"},524:function(t,n,a){t.exports=a.p+"assets/img/boot-done.48b57b22.png"},525:function(t,n,a){t.exports=a.p+"assets/img/efi-base.2af0e24a.png"},526:function(t,n,a){t.exports=a.p+"assets/img/mount-efi-usb.c855475e.png"},527:function(t,n,a){t.exports=a.p+"assets/img/base-efi.3b1f0304.png"},657:function(t,n,a){"use strict";a.r(n);var s=a(26),c=Object(s.a)({},(function(){var t=this,n=t.$createElement,s=t._self._c||n;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"tao-bo-cai-trong-macos"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#tao-bo-cai-trong-macos"}},[t._v("#")]),t._v(" Tạo bộ cài trong macOS")]),t._v(" "),s("p",[t._v("Trong khi bạn không cần phải có macOS mới có thể sử dụng OpenCore, một số người prefer having a fresh slate with their boot manager upgrades.")]),t._v(" "),s("p",[t._v("Để bắt đầu, chúng tôi sẽ tải xuống một bộ cài macOS. Bạn có thể bỏ qua bước này và chuyển sang format USB nếu bạn chỉ tạo một bootable OpenCore USB chứ không phải là USB cài đặt. Đối với những người khác, bạn có thể tải xuống macOS từ App Store hoặc với  bằng tập lệnh của Munki.")]),t._v(" "),s("h2",{attrs:{id:"tai-bo-cai-macos-modern-os"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#tai-bo-cai-macos-modern-os"}},[t._v("#")]),t._v(" Tải bộ cài macOS: Modern OS")]),t._v(" "),s("ul",[s("li",[t._v("Phương pháp này cho phép bạn tải xuống macOS 10.13 và các bản mới hơn, đối với 10.12 trở lên, hãy xem "),s("a",{attrs:{href:"#tai-xuong-macos-legacy-os"}},[t._v("Tải xuống macOS: Legacy OS")])])]),t._v(" "),s("p",[t._v("Đối với những máy Mac đáp ứng các yêu cầu của phiên bản macOS mà bạn muốn cài đặt, hãy truy cập vào App Store và tải xuống bộ cài macOS bạn mong muốn và tiếp tục "),s("a",{attrs:{href:"#thiet-lap-bo-cai"}},[s("strong",[t._v("Thiết lập bộ cài")])]),t._v(".")]),t._v(" "),s("p",[t._v("Đối với các máy cần bộ cài macOS cụ thể hoặc không thể tải xuống từ App Store, bạn có thể sử dụng script InstallInstallMacOS của Munki.")]),t._v(" "),s("p",[t._v("Để chạy nó, bạn chỉ cần sao chép và dán lệnh dưới đây vào terminal:")]),t._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("mkdir")]),t._v(" ~/macOS-installer "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&&")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("cd")]),t._v(" ~/macOS-installer "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&&")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("curl")]),t._v(" -O https://raw.githubusercontent.com/munki/macadmin-scripts/main/installinstallmacos.py "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&&")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" python installinstallmacos.py\n")])])]),s("p",[s("img",{attrs:{src:a(518),alt:""}})]),t._v(" "),s("p",[t._v("Như bạn có thể thấy, chúng tôi nhận được một danh sách các bộ cài macOS. Nếu bạn cần một bản macOS cụ thể, bạn có thể chọn nó bằng cách nhập số bên cạnh nó. Đối với ví dụ này, chúng tôi sẽ chọn 10:")]),t._v(" "),s("p",[s("img",{attrs:{src:a(519),alt:""}})]),t._v(" "),s("ul",[s("li",[s("strong",[t._v("Lưu ý cho macOS 11, Big Sur")]),t._v(": Vì bản macOS này còn khá mới nên vẫn còn một số vấn đề với một số hệ thống cần giải quyết. Để biết thêm thông tin, hãy xem tại đây: "),s("RouterLink",{attrs:{to:"/extras/big-sur/"}},[t._v("OpenCore và macOS 11: Big Sur")]),t._v(" "),s("ul",[s("li",[t._v("Đối với người mới, chúng tôi khuyên dùng macOS 10.15, Catalina")])])],1),t._v(" "),s("li",[s("strong",[t._v("Lưu ý đối với Nvidia GPU")]),t._v(": Chắc chắn rằng  bạn đã xác minh xem phần cứng của bạn có hỗ trợ các bản macOS mới hơn hay không, hãy xem "),s("RouterLink",{attrs:{to:"/macos-limits.html"}},[t._v("Hardware Limitations")])],1)]),t._v(" "),s("p",[t._v("Quá trình tải xuống sẽ mất một lúc vì chúng ta đang tải xuống một bộ cài macOS 8GB +, vì vậy bạn nên đọc phần còn lại của guide trong khi chờ đợi.")]),t._v(" "),s("p",[t._v("Sau khi hoàn tất, bạn sẽ tìm thấy trong thư mục "),s("code",[t._v("~/macOS-Installer/")]),t._v(" một file DMG chứa bộ cài macOS, VD: "),s("code",[t._v("Install_macOS_11.1-20C69.dmg")]),t._v(". Mount nó và bạn sẽ tìm thấy installer application.")]),t._v(" "),s("ul",[s("li",[t._v("Lưu ý: Chúng tôi khuyên bạn nên di chuyển Install macOS.app vào thư mục "),s("code",[t._v("/Applications")]),t._v(", bởi vì chúng ta sẽ thực thi các lệnh từ đó.")]),t._v(" "),s("li",[t._v("Note 2: Nhấn phím Cmd+Shift+G ở ngoài Finder sẽ giúp bạn dễ dàng chuyển đến "),s("code",[t._v("~/macOS-installer")])])]),t._v(" "),s("p",[s("img",{attrs:{src:a(520),alt:""}})]),t._v(" "),s("p",[s("img",{attrs:{src:a(521),alt:""}})]),t._v(" "),s("p",[t._v("Từ đây, hãy chuyển đến "),s("a",{attrs:{href:"#setting-up-the-installer"}},[t._v("Thiết lập bộ cài")]),t._v(" để hoàn tất công việc của bạn.")]),t._v(" "),s("h2",{attrs:{id:"tai-bo-cai-macos-legacy-os"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#tai-bo-cai-macos-legacy-os"}},[t._v("#")]),t._v(" Tải bộ cài macOS: Legacy OS")]),t._v(" "),s("ul",[s("li",[s("p",[t._v("Phương pháp này cho phép bạn tải xuống các phiên bản OS X cũ hơn nhiều, hiện hỗ trợ tất cả các phiên bản OS X của Intel (từ 10.4 đến hiện tại)")]),t._v(" "),s("ul",[s("li",[s("RouterLink",{attrs:{to:"/installer-guide/mac-install-pkg.html"}},[t._v("Legacy macOS: Bộ cài Offline")]),t._v(" "),s("ul",[s("li",[t._v("Hỗ trợ từ 10.10-10.12")])])],1),t._v(" "),s("li",[s("RouterLink",{attrs:{to:"/installer-guide/mac-install-recovery.html"}},[t._v("Legacy macOS: Bộ cài Online (Hỗ trợ từ 10.7-10.15)")]),t._v(" "),s("ul",[s("li",[t._v("Hỗ trợ từ 10.7-11")])])],1),t._v(" "),s("li",[s("RouterLink",{attrs:{to:"/installer-guide/mac-install-dmg.html"}},[t._v("Legacy macOS: Disk Images")]),t._v(" "),s("ul",[s("li",[t._v("Hỗ trợ từ 10.4-10.6")])])],1)])])]),t._v(" "),s("h2",{attrs:{id:"thiet-lap-bo-cai"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#thiet-lap-bo-cai"}},[t._v("#")]),t._v(" Thiết lập bộ cài")]),t._v(" "),s("p",[t._v("Bây giờ chúng tôi sẽ format USB để chuẩn bị cho quá trình cài đặt macOS và OpenCore. Chúng ta sẽ sử dụng macOS Extended (HFS+) với GUID partition map. Thao tác này sẽ tạo ra hai phân vùng: phân vùng chính là "),s("code",[t._v("MyVolume")]),t._v(" và phân vùng thứ hai có tên là "),s("code",[t._v("EFI")]),t._v(" được sử dụng làm phân vùng khởi động, nơi firmware của máy tính sẽ kiểm tra các tệp khởi động (boot files).")]),t._v(" "),s("ul",[s("li",[t._v("Lưu ý: Theo mặc định, Disk Utility chỉ hiển thị các phân vùng - nhấn Cmd/Win+2 để hiển thị tất cả các thiết bị (hoặc bạn có thể nhấn nút View)")]),t._v(" "),s("li",[t._v('Note 2: Người dùng follow phần "Legacy macOS: Online method" có thể bỏ qua và đi đến phần '),s("a",{attrs:{href:"#thiet-lap-opencore-efi"}},[t._v("Thiết lập OpenCore EFI")])])]),t._v(" "),s("p",[s("img",{attrs:{src:a(356),alt:"Formatting the USB"}})]),t._v(" "),s("p",[t._v("Tiếp theo, hãy chạy lệnh "),s("code",[t._v("createinstallmedia")]),t._v(" do "),s("a",{attrs:{href:"https://support.apple.com/en-us/HT201372",target:"_blank",rel:"noopener noreferrer"}},[t._v("Apple"),s("OutboundLink")],1),t._v(" cung cấp. Lưu ý rằng lệnh được viết cho USB được format với tên "),s("code",[t._v("MyVolume")]),t._v(":")]),t._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" /Applications/Install"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v(" macOS"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v(" Big"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v(" Sur.app/Contents/Resources/createinstallmedia --volume /Volumes/MyVolume\n")])])]),s("p",[t._v("Điều này sẽ mất một chút thời gian đủ để bạn có thể làm một ly cà phê hoặc tiếp tục đọc hướng dẫn (công bằng mà nói, bạn nên đọc toàn bộ guide trước khi làm theo guide này).")]),t._v(" "),s("p",[t._v("Bạn cũng có thể thay thế đường dẫn "),s("code",[t._v("createinstallmedia")]),t._v(" bằng đường dẫn nơi chứa bộ cài của bạn (tương tự với tên ổ đĩa).\n::: Chi tiết về Legacy createinstallmedia Commands")]),t._v(" "),s("p",[t._v("Được lấy từ trang web của chính thức của Apple: "),s("a",{attrs:{href:"https://support.apple.com/en-us/HT201372",target:"_blank",rel:"noopener noreferrer"}},[t._v("Cách tạo USB cài macOS"),s("OutboundLink")],1)]),t._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Big Sur")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" /Applications/Install"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v(" macOS"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v(" Big"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v(" Sur.app/Contents/Resources/createinstallmedia --volume /Volumes/MyVolume\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Catalina")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" /Applications/Install"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v(" macOS"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v(" Catalina.app/Contents/Resources/createinstallmedia --volume /Volumes/MyVolume\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Mojave")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" /Applications/Install"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v(" macOS"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v(" Mojave.app/Contents/Resources/createinstallmedia --volume /Volumes/MyVolume\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# High Sierra")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" /Applications/Install"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v(" macOS"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v(" High"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v(" Sierra.app/Contents/Resources/createinstallmedia --volume /Volumes/MyVolume\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Sierra")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" /Applications/Install"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v(" macOS"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v(" Sierra.app/Contents/Resources/createinstallmedia --volume /Volumes/MyVolume --applicationpath /Applications/Install"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v(" macOS"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v(" Sierra.app\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# El Capitan")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" /Applications/Install"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v(" OS"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v(" X"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v(" El"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v(" Capitan.app/Contents/Resources/createinstallmedia --volume /Volumes/MyVolume --applicationpath /Applications/Install"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v(" OS"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v(" X"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v(" El"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v(" Capitan.app\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Yosemite")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" /Applications/Install"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v(" OS"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v(" X"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v(" Yosemite.app/Contents/Resources/createinstallmedia --volume /Volumes/MyVolume --applicationpath /Applications/Install"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v(" OS"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v(" X"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v(" Yosemite.app\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Mavericks")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" /Applications/Install"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v(" OS"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v(" X"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v(" Mavericks.app/Contents/Resources/createinstallmedia --volume /Volumes/MyVolume --applicationpath /Applications/Install"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v(" OS"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v(" X"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v(" Mavericks.app --nointeraction\n")])])]),s("p",[t._v(":::")]),t._v(" "),s("h2",{attrs:{id:"thiet-lap-cho-legacy"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#thiet-lap-cho-legacy"}},[t._v("#")]),t._v(" Thiết lập cho Legacy")]),t._v(" "),s("p",[t._v("Đối với những máy không hỗ trợ UEFI, hãy xem bên dưới:")]),t._v(" "),s("details",{staticClass:"custom-block details"},[s("summary",[t._v("Thiết lập Legacy Boot")]),t._v(" "),s("p",[t._v("Để bắt đầu, bạn cần những thứ sau:")]),t._v(" "),s("ul",[s("li",[t._v("BootInstall_IA32.tool hoặc BootInstall_X64.tool\n"),s("ul",[s("li",[t._v("Chúng có thể được tìm thấy trong OpenCorePkg dưới "),s("code",[t._v("/Utilties/LegacyBoot/")])])])]),t._v(" "),s("li",[t._v("Install USB(Đã tạo ở trên)")])]),t._v(" "),s("p",[t._v("Trong thư mục OpenCore, chuyển đếnn "),s("code",[t._v("Utilities/LegacyBoot")]),t._v(". Tại đây, bạn sẽ tìm thấy một tệp có tên là "),s("code",[t._v("BootInstall_ARCH.tool")]),t._v(".Nó sẽ cài đặt DuetPkg vào USB của bạn.")]),t._v(" "),s("p",[s("img",{attrs:{src:a(522),alt:"BootInstall Location"}})]),t._v(" "),s("p",[t._v("Bây giờ hãy chạy tool này trong terminal "),s("strong",[t._v("với quyền sudo")]),t._v("(Không thì công cụ này có lẽ sẽ bị lỗi):")]),t._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Replace X64 with IA32 if you have a 32-Bit CPU")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" ~/Downloads/OpenCore/Utilities/legacyBoot/BootInstall_X64.tool\n")])])]),s("p",[s("img",{attrs:{src:a(523),alt:"Disk Selection/writing new MBR"}})]),t._v(" "),s("p",[t._v("Điều này sẽ cung cấp cho bạn danh sách các đĩa có sẵn, chọn đĩa của bạn và bạn sẽ được nhắc write a new MBR. Chọn yes"),s("code",[t._v("[y]")]),t._v(" và bạn sẽ hoàn tất.")]),t._v(" "),s("p",[s("img",{attrs:{src:a(524),alt:"Finished Installer"}})]),t._v(" "),s("p",[s("img",{attrs:{src:a(525),alt:"Base EFI"}})]),t._v(" "),s("p",[t._v("Điều này sẽ cung cấp cho bạn một phân vùng EFI với tệp "),s("strong",[t._v("bootia32")]),t._v(" hoặc "),s("strong",[t._v("bootx64")])])]),t._v(" "),s("h2",{attrs:{id:"thiet-lap-opencore-efi"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#thiet-lap-opencore-efi"}},[t._v("#")]),t._v(" Thiết lập OpenCore EFI")]),t._v(" "),s("p",[t._v("Thiết lập OpenCore EFI khá đơn giản – tất cả những gì bạn cần làm là mount phân vùng EFI của bạn. Phân vùng này sẽ được tạo tự động khi chúng ta định dạng bằng GUID nhưng được unmounted theo mặc định, đây là nơi mà người bạn của chúng tôi "),s("a",{attrs:{href:"https://github.com/corpnewt/MountEFI",target:"_blank",rel:"noopener noreferrer"}},[t._v("MountEFI"),s("OutboundLink")],1),t._v(" tham gia:")]),t._v(" "),s("p",[s("img",{attrs:{src:a(526),alt:"MountEFI"}})]),t._v(" "),s("p",[t._v("Bạn sẽ nhận thấy rằng khi chúng ta mở phân vùng EFI, nó trống rỗng. Đây là nơi mọi chuyện vui vẻ bắt đầu.")]),t._v(" "),s("p",[s("img",{attrs:{src:a(527),alt:"Empty EFI partition"}})]),t._v(" "),s("h2",{attrs:{id:"bay-gio-khi-moi-thu-đa-hoan-thanh-hay-truy-cap-thiet-lap-efi-đe-hoan-thanh-cong-viec-cua-minh"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#bay-gio-khi-moi-thu-đa-hoan-thanh-hay-truy-cap-thiet-lap-efi-đe-hoan-thanh-cong-viec-cua-minh"}},[t._v("#")]),t._v(" Bây giờ khi mọi thứ đã hoàn thành, hãy truy cập "),s("RouterLink",{attrs:{to:"/installer-guide/opencore-efi.html"}},[t._v("Thiết lập EFI")]),t._v(" để hoàn thành công việc của mình")],1)])}),[],!1,null,null,null);n.default=c.exports}}]);