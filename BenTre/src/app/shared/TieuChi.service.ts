import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { TieuChi } from 'src/app/shared/TieuChi.model';
import { environment } from 'src/environments/environment';
@Injectable({
    providedIn: 'root'
})
export class TieuChiService {
    list: TieuChi[] | undefined;
    formData!: TieuChi;
    aPIURL: string = environment.APIURL;
    controller: string = "TieuChi";
    constructor(public httpClient: HttpClient) {
        this.initializationFormData();
    }
    initializationFormData() {
        this.formData = {
        }
        this.list = [];
    }
    Save(formData: TieuChi) {
        let url = this.aPIURL + this.controller + '/Save';
        const formUpload: FormData = new FormData();
        formUpload.append('data', JSON.stringify(formData));
        return this.httpClient.post(url, formUpload);
    }
    SaveAsync(formData: TieuChi) {
        let url = this.aPIURL + this.controller + '/SaveAsync';
        const formUpload: FormData = new FormData();
        formUpload.append('data', JSON.stringify(formData));
        return this.httpClient.post(url, formUpload);
    }
    GetAllToList() {
        this.formData.ID = "8a6e0804-2bd0-4672-b79d-d97027f9071a";
        this.formData.Name = "1.1.Cơ sở vật chất: có các phân khu riêng biệt, có nền cứng, không đọng nước, các cửa phải bảo đảm ngăn sự ngăn cách lây nhiễm sinh vật gây hại giữa khác phân khu và từ bên ngoài, bảo đảm nguyên tắc 1 chiều (không chỉ tích vào phần đạt/không đạt mà phải ghi rõ diễn giải khi thực hiện kiểm tra, giám sát)";
        this.list?.push(this.formData);
        this.formData = {
        }
        this.formData.ID = "8a6e0804-2bd0-4672-b79d-d97027f9071a";
        this.formData.Name = "1.2.Trang thiết bị: có đủ trang thiết bị, dụng cụ phục vụ cho việc tiếp nhận, phân loại, sơ chế, loại bỏ sinh vật gây hại, đóng gói, bảo quản đặc biệt là các trang thiết bị để thực hiện xử lý sản phẩm theo yêu cầu của nước nhập khẩu";
        this.list?.push(this.formData);
        this.formData = {
        }
        this.formData.ID = "8a6e0804-2bd0-4672-b79d-d97027f9071a";
        this.formData.Name = "1.3.Quy trình đóng gói: theo nguyên tắc một chiều. Đối với mỗi công đoạn đều được ghi chép và giám sát thực hiện. Có xây dựng thành tài liệu về quy trình đóng gói và phổ biến cho nhân công, người lao động trong nhà đóng gói.";
        this.list?.push(this.formData);
        this.formData = {
        }
        this.formData.ID = "8a6e0804-2bd0-4672-b79d-d97027f9071a";
        this.formData.Name = "1.4.Nhân công: - Được trang bị đầy đủ kiến thức về kiểm soát các sinh vật gây hại, an toàn thực phẩm và quy trình đóng gói. - Được trang bị đầy đủ trang phục bảo hộ lao động (ủng, nón găng tay, khẩu trang, quần áo bảo hộ lao động,...).";
        this.list?.push(this.formData);
        this.formData = {
        }
        this.formData.ID = "8a6e0804-2bd0-4672-b79d-d97027f9071a";
        this.formData.Name = "2.1.Giấy phép kinh doanh; giấy chứng nhận an toàn vệ sinh thực phẩm, ISO, … (nếu có)";
        this.list?.push(this.formData);
        this.formData = {
        }
        this.formData.ID = "8a6e0804-2bd0-4672-b79d-d97027f9071a";
        this.formData.Name = "2.2.Quy trình đóng gói (SOP) mô tả chi tiết tất cả các hoạt động liên quan đến việc tiếp nhận, phân loại, xử lý, đóng gói và vận chuyển nông sản.";
        this.list?.push(this.formData);
        this.formData = {
        }
        this.formData.ID = "8a6e0804-2bd0-4672-b79d-d97027f9071a";
        this.formData.Name = "2.3.Thuyết minh về cơ sở vật chất, trang thiết bị, dụng cụ và quy trình đóng gói đảm bảo đáp ứng các yêu cầu về vệ sinh an toàn thực phẩm và kiểm soát sinh vật gây hại.";
        this.list?.push(this.formData);
        this.formData = {
        }
        this.formData.ID = "8a6e0804-2bd0-4672-b79d-d97027f9071a";
        this.formData.Name = "2.4.Hồ sơ nguồn gốc nông sản: khối lượng của lô hàng, mã số vùng trồng, thông tin khách hàng và đơn vị xuất khẩu";
        this.list?.push(this.formData);
        this.formData = {
        }
        this.formData.ID = "8a6e0804-2bd0-4672-b79d-d97027f9071a";
        this.formData.Name = "2.4.Hồ sơ nguồn gốc nông sản: khối lượng của lô hàng, mã số vùng trồng, thông tin khách hàng và đơn vị xuất khẩu";
        this.list?.push(this.formData);
        this.formData = {
        }
        this.formData.ID = "8a6e0804-2bd0-4672-b79d-d97027f9071a";
        this.formData.Name = "2.5.Hồ sơ kiểm soát sinh vật gây hại: có quy trình kiểm soát sinh vật gây hại và ghi chép, cập nhật thường xuyên thời gian kiểm tra, danh sách sinh vật gây hại phát hiện được, số lượng cá thể phát hiện, biện pháp xử lý, tần suất đặt bẫy và sử dụng hóa chất tại cơ sở đóng gói.";
        this.list?.push(this.formData);
        this.formData = {
        }
        this.formData.ID = "8a6e0804-2bd0-4672-b79d-d97027f9071a";
        this.formData.Name = "2.6.Hồ sơ vệ sinh, bảo vệ môi trường: thời gian, khu vực, người thực hiện, hóa chất sử dụng tại cơ sở đóng gói; biện pháp quản lý chất thải và hợp đồng xử lý chất thải";
        this.list?.push(this.formData);
        this.formData = {
        }
        this.formData.ID = "8a6e0804-2bd0-4672-b79d-d97027f9071a";
        this.formData.Name = "2.7.Hồ sơ nhân sự. Hồ sơ tập huấn: quy trình đóng gói, kiểm soát sinh vật gây hại, an toàn thực phẩm, hình ảnh tập huấn, chứng nhận (nếu có)…";
        this.list?.push(this.formData);
        this.formData = {
        }
        this.formData.ID = "8a6e0804-2bd0-4672-b79d-d97027f9071a";
        this.formData.Name = "2.8.Các hồ sơ liên quan khác: hồ sơ phòng cháy chữa cháy theo quy định, hồ sơ phòng chống dịch bệnh theo yêu cầu cụ thể của nước nhập khẩu.";
        this.list?.push(this.formData);
        this.formData = {
        }
        this.formData.ID = "8a6e0804-2bd0-4672-b79d-d97027f9071a";
        this.formData.Name = "3.1.Yêu cầu về sức khỏe ";
        this.list?.push(this.formData);
        this.formData = {
        }
        this.formData.ID = "8a6e0804-2bd0-4672-b79d-d97027f9071a";
        this.formData.Name = "3.2.Cán bộ kỹ thuật được tập huấn về quy định của nước nhập khẩu, các bước trong quy trình đóng và nhận diện sinh vật gây hại, biện pháp giám sát và phòng chống sinh vật gây hại trong nhà đóng gói, biện pháp xử lý hàng hóa không đạt yêu cầu xuất khẩu.";
        this.list?.push(this.formData);
        this.formData = {
        }
        this.formData.ID = "8a6e0804-2bd0-4672-b79d-d97027f9071a";
        this.formData.Name = "4.1.Có biện pháp kiểm soát sinh vật gây hại có khả năng đi theo và tái nhiễm vào nông sản xuất khẩu theo quy định. (Kiểm soát SVGH theo quy định của nước nhập khẩu hoặc theo hướng dẫn của Cục BVTV hoặc Cơ quan chuyên ngành về Bảo vệ và KDTV vật ở địa phương)";
        this.list?.push(this.formData);
        this.formData = {
        }
        this.formData.ID = "8a6e0804-2bd0-4672-b79d-d97027f9071a";
        this.formData.Name = "4.2.Không thực hiện đóng gói cùng một lúc sản phẩm xuất khẩu đi nhiều thị trường hoặc nhiều sản phẩm hoặc sản phẩm xuất khẩu và sản phẩm tiêu thụ nội địa để tránh lây nhiễm chéo";
        this.list?.push(this.formData);
        this.formData = {
        }
        this.formData.ID = "8a6e0804-2bd0-4672-b79d-d97027f9071a";
        this.formData.Name = "4.3.Bẫy (đèn, dính) côn trùng và bẫy chuột (sơ đồ bố trí bẫy)";
        this.list?.push(this.formData);
        this.formData = {
        }
        this.formData.ID = "8a6e0804-2bd0-4672-b79d-d97027f9071a";
        this.formData.Name = "5.1.Nông sản cần được thu mua từ vùng trồng đã được phê duyệt mã số, đủ điều kiện xuất khẩu để bảo đảm truy xuất nguồn gốc. Ghi rõ mua từ vùng nào (mã số nếu có)";
        this.list?.push(this.formData);
        this.formData = {
        }
        this.formData.ID = "8a6e0804-2bd0-4672-b79d-d97027f9071a";
        this.formData.Name = "5.2.Các biện pháp để truy xuất nguồn gốc nguyên liệu sử dụng trong nhà đóng gói";
        this.list?.push(this.formData);
        this.formData = {
        }
        this.formData.ID = "8a6e0804-2bd0-4672-b79d-d97027f9071a";
        this.formData.Name = "6.1.Thiết bị, dụng cụ đóng gói được vệ sinh thường xuyên đảm bảo sạch sẽ đáp ứng quy định.";
        this.list?.push(this.formData);
        this.formData = {
        }
        this.formData.ID = "8a6e0804-2bd0-4672-b79d-d97027f9071a";
        this.formData.Name = "6.2.Phun khử trùng định khu vực nhà đóng gói (tháng/quý/năm) hoặc theo yêu cầu của nước nhập khẩu.";
        this.list?.push(this.formData);
        this.formData = {
        }
        this.formData.ID = "8a6e0804-2bd0-4672-b79d-d97027f9071a";
        this.formData.Name = "6.3.Địa điểm tập kết thu gom và xử lý rác thải, phế phẩm đảm bảo; Vận chuyển rác thải và phế phẩm sau khi đóng gói theo đường riêng không đi chung với đường vận chuyển lô hàng";
        this.list?.push(this.formData);
        this.formData = {
        }
        this.formData.ID = "8a6e0804-2bd0-4672-b79d-d97027f9071a";
        this.formData.Name = "6.4.Xử lý nước thải theo quy định";
        this.list?.push(this.formData);
        this.formData = {
        }
        this.formData.ID = "8a6e0804-2bd0-4672-b79d-d97027f9071a";
        this.formData.Name = "7.1.Tuân thủ theo các yêu cầu cụ thể khác của nước nhập khẩu.";
        this.list?.push(this.formData);
        this.formData = {
        }
        this.formData.ID = "8a6e0804-2bd0-4672-b79d-d97027f9071a";
        this.formData.Name = "7.2.Kiểm tra sản phẩm trước khi xuất khẩu; thường xuyên lấy mẫu kiểm tra các chỉ tiêu về dư lượng thuốc bảo vệ thực vật.";
        this.list?.push(this.formData);
        this.formData = {
        }
        this.formData.ID = "8a6e0804-2bd0-4672-b79d-d97027f9071a";
        this.formData.Name = "7.3.Cơ sở đóng gói có thay đổi so với đăng ký ban đầu (về người đại diện hoặc quy mô, cấu trúc). Đối với quy mô, thì sơ đồ, quy trình có tuân thủ quy định của nước nhập khẩu không?";
        this.list?.push(this.formData);
        if (this.list != null) {
            for (let i = 0; i < this.list.length; i++) {
                this.list[i].IsDat = false;
                this.list[i].IsKhongDat = false;
            }
        }
        return this.list;
    }
}
