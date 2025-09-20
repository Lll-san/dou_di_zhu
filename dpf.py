import fitz  # PyMuPDF
import os

# 打开PDF文件
pdf_file = fitz.open("C:\Users\20215\Desktop\2025年江西省大学生智能机器人大赛实施方案-修订版 2025.6.2.pdf")

# 遍历每一页
for page_index in range(len(pdf_file)):
    # 获取当前页
    page = pdf_file[page_index]
    # 获取当前页的所有图片列表
    image_list = page.get_images()
    
    # 遍历当前页的每一张图片
    for image_index, img in enumerate(image_list):
        # 获取图片的XREF编号
        xref = img[0]
        # 提取图片字节流
        base_image = pdf_file.extract_image(xref)
        image_bytes = base_image["image"]
        # 获取图片扩展名
        image_ext = base_image["ext"]
        # 生成图片文件名并保存
        image_filename = f"page_{page_index+1}_image_{image_index+1}.{image_ext}"
        with open(image_filename, "wb") as image_file:
            image_file.write(image_bytes)
            print(f"已保存: {image_filename}")

print("所有图片提取完成！")