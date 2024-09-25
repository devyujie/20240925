"use client";

import React, { useState, useEffect } from "react";

import { Document, Page } from "react-pdf";
import { pdfjs } from "react-pdf";

import { PDFDocument, degrees } from "pdf-lib";

import { Button } from "@/components/ui/button";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { ZoomIn, ZoomOut, LoaderCircle } from "lucide-react";

const Home = () => {
  // 文件
  const [file, setFile] = useState<File | null>(null);
  // 页数
  const [numPages, setNumPages] = useState<number | null>(null);
  // 旋转角度
  const [pageRotations, setPageRotations] = useState<{ [key: number]: number }>({});
  // 缩放比例
  const [scale, setScale] = useState(1);
  // 是否加载中
  const [isLoading, setIsLoading] = useState(false);

  // 设置 PDF.js 的 worker 路径
  useEffect(() => {
    pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;
  }, []);

  // 上传文件
  const onFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setIsLoading(true);
      setTimeout(() => {
        // 设置文件
        setFile(file);
        // 设置加载状态
        setIsLoading(false);
      }, 200);
    }
  };

  // 文档加载成功
  const onDocumentLoadSuccess = ({ numPages }: { numPages: number }) => {
    // 设置页数
    setNumPages(numPages);
    // 设置旋转角度
    setPageRotations({});
  };

  // 旋转页面
  const rotatePage = (pageNumber: number) => {
    setPageRotations((prev) => ({
      ...prev,
      // 更新特定页面的旋转角度
      [pageNumber]: ((prev[pageNumber] || 0) + 90) % 360,
    }));
  };

  // 旋转所有页面
  const rotateAll = () => {
    if (numPages) {
      // 创建一个新的旋转对象
      const newRotations: { [key: number]: number } = {};
      // 遍历所有页面
      for (let i = 1; i <= numPages; i++) {
        newRotations[i] = ((pageRotations[i] || 0) + 90) % 360;
      }
      setPageRotations(newRotations);
    }
  };

  // 移除 PDF
  const removePDF = () => {
    setFile(null);
    setNumPages(null);
    setPageRotations({});
  };

  // 下载 PDF
  const downloadPDF = async () => {
    if (file && numPages) {
      try {
        // 读取原始PDF
        const arrayBuffer = await file.arrayBuffer();
        const pdfDoc = await PDFDocument.load(arrayBuffer);
        // 应用旋转
        for (let i = 0; i < numPages; i++) {
          const page = pdfDoc.getPage(i);
          const rotation = pageRotations[i + 1] || 0;
          page.setRotation(degrees(rotation));
        }
        // 保存修改后的PDF
        const pdfBytes = await pdfDoc.save();
        // 创建下载链接
        const blob = new Blob([pdfBytes], { type: "application/pdf" });
        const link = document.createElement("a");
        link.href = URL.createObjectURL(blob);
        const date = new Date();
        link.download = `${date.getTime()}_${file.name}`;
        link.click();
      } catch (error) {
        console.error("错误：", error);
      }
    }
  };

  return (
    <>
      <div className="mx-auto py-20 bg-[#f7f5ee] text-black space-y-5">
        <div className="text-center flex flex-col mb-10 space-y-5">
          <h1 className="text-5xl font-serif">Rotate PDF Pages</h1>
          <p className="mt-2 text-gray-600 max-w-lg mx-auto">Simply click on a page to rotate it. You can then download your modified PDF.</p>
        </div>

        {/* 上传框 */}
        {!isLoading && !file && (
          <div className="h-[350px] relative text-center w-[275px] mx-auto">
            <input type="file" className="cursor-pointer hidden" accept=".pdf" id="pdf-input" onChange={onFileChange} />
            <label htmlFor="pdf-input" className="h-full flex items-center justify-center border rounded transition-all bg-white border-dashed border-stone-300">
              <div className="cursor-pointer flex flex-col items-center space-y-3">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" viewBox="0 0 24 24">
                  <path fill="currentColor" d="M19.35 10.04A7.49 7.49 0 0 0 12 4C9.11 4 6.6 5.64 5.35 8.04A5.994 5.994 0 0 0 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5c0-2.64-2.05-4.78-4.65-4.96M14 13v4h-4v-4H7l5-5l5 5z" />
                </svg>
                <p className="pointer-events-none font-medium text-sm leading-6 pointer opacity-75">Click to upload or drag and drop</p>
              </div>
            </label>
          </div>
        )}

        {isLoading && (
          <div className="flex items-center justify-center">
            <LoaderCircle className="w-5 h-5 text-gray-500 animate-spin" />
          </div>
        )}

        {file && (
          <div className="flex flex-col items-center">
            <div className="flex justify-between items-center mb-4 w-[350px]">
              {/* 旋转全部 */}
              <Button onClick={rotateAll} className="text-[16px] text-center rounded-[6px] bg-[#ff612f] hover:bg-[#ff612f] text-white px-[12px] py-[10px] cursor-pointer ">
                Rotate all
              </Button>

              {/* 移除 PDF */}
              <TooltipProvider delayDuration={100}>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button onClick={removePDF} className="text-[16px] text-center rounded-[6px] bg-gray-800 hover:bg-gray-800 text-white px-[12px] py-[10px] cursor-pointer ">
                      Remove PDF
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent className="bg-[#121212e6] text-white p-2 rounded shadow">
                    <p>Remove this PDF and select a new one</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>

              {/* 放大 */}
              <TooltipProvider delayDuration={100}>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button onClick={() => setScale((prev) => Math.min(prev + 0.1, 2))} className="rounded-full hover:scale-105 shadow bg-white text-white w-10 h-10 cursor-pointer flex items-center justify-center p-0">
                      <ZoomIn className="w-5 h-5 text-black" />
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent className="bg-[#121212e6] text-white p-2 rounded shadow">
                    <p>Zoom in</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>

              {/* 缩小 */}
              <TooltipProvider delayDuration={100}>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button onClick={() => setScale((prev) => Math.max(prev - 0.1, 0.5))} className="rounded-full hover:scale-105 shadow bg-white text-white w-10 h-10 cursor-pointer flex items-center justify-center p-0">
                      <ZoomOut className="w-5 h-5 text-black" />
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent className="bg-[#121212e6] text-white p-2 rounded shadow">
                    <p>Zoom out</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </div>

            {/* 显示 PDF */}
            <Document file={file} onLoadSuccess={onDocumentLoadSuccess} className="flex justify-center items-center flex-wrap">
              {Array.from(new Array(numPages), (el, index: number) => (
                <div className="m-5 p-3 bg-white w-[240px] overflow-hidden relative flex flex-col justify-start items-center  hover:bg-gray-50 cursor-pointer" key={`page_${index + 1}`}>
                  <div onClick={() => rotatePage(index + 1)} className="absolute z-2 top-1 right-1 w-6 h-6 rounded-full bg-[#ff612f] flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 text-white" viewBox="0 0 24 24">
                      <g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2">
                        <path d="M17.7 7.7A7.1 7.1 0 0 0 5 10.8" />
                        <path d="M18 4v4h-4m-7.7 8.3A7.1 7.1 0 0 0 19 13.2" />
                        <path d="M6 20v-4h4" />
                      </g>
                    </svg>
                  </div>
                  <div className="w-[220px] h-[300px]">
                    <Page pageNumber={index + 1} rotate={pageRotations[index + 1] || 0} scale={scale} width={220} onClick={() => rotatePage(index + 1)} />
                  </div>
                  <p className="text-center text-xs text-black">{index + 1}</p>
                </div>
              ))}
            </Document>

            {/* 下载 PDF */}
            <div className="mt-4">
              <TooltipProvider delayDuration={100}>
                <Tooltip>
                  <TooltipTrigger>
                    <Button onClick={downloadPDF} className="text-[16px] text-center rounded-[6px] bg-[#ff612f] hover:bg-[#ff612f] text-white px-[12px] py-[10px] cursor-pointer ">
                      Download
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent className="bg-[#121212e6] text-white p-2 rounded shadow">
                    <p>Split and download PDF</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Home;
