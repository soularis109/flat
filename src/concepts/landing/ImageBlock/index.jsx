import { useEffect, useState } from "react";
const ImageBlock = () => {
  const [htmlContent, setHtmlContent] = useState("");

  useEffect(() => {
    const loadHtmlContent = async () => {
      try {
        const response = await fetch("/1.html"); // Шлях до вашого HTML-файлу
        const html = await response.text();
        setHtmlContent(html);
      } catch (error) {
        console.error("Помилка при завантаженні HTML-фрагмента:", error);
      }
    };

    loadHtmlContent();
  }, []);
  return <div dangerouslySetInnerHTML={{ __html: htmlContent }} />;
};

export default ImageBlock;
