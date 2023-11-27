import React, { useState, useRef, ChangeEvent } from 'react';
import { SketchPicker } from 'react-color';
import html2canvas from 'html2canvas';
import { saveAs } from 'file-saver';

const BackgroundChanger: React.FC = () => {
  const [backgroundColor, setBackgroundColor] = useState<string>('black');
  const [textColor, setTextColor] = useState<string>('yellow');
  const [showColorPicker, setShowColorPicker] = useState<boolean>(false);
  const [showTextColorPicker, setShowTextColorPicker] = useState<boolean>(false);
  const [backgroundImage, setBackgroundImage] = useState<string>('');
  const [fontSize, setFontSize] = useState<number>(16);

  const fileInputRef = useRef<HTMLInputElement | null>(null);

  const handleColorChange = (color: any): void => {
    setBackgroundColor(color.hex);
  };

  const handleTextColorChange = (color: any): void => {
    setTextColor(color.hex);
  };

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>): void => {
    // Remove non-numeric characters from the input value
    const numericValue = e.target.value.replace(/[^0-9]/g, '');

    // Update the input value with only numeric characters
    e.target.value = numericValue;

    // Set the font size based on the numeric value
    setFontSize(Number(numericValue));
  };


  const handlePreview = (): void => {
    // Use HTML2Canvas to capture the modified component
    html2canvas(
      document.getElementById('modifiedComponent') as HTMLElement
    ).then((canvas) => {
      // Display the captured image in a new window (for preview)
      const previewWindow = window.open();
      previewWindow?.document.write('<img src="' + canvas.toDataURL() + '" />');
    });
  };

  const handleExport = (): void => {
    // Use HTML2Canvas to capture the modified component
    html2canvas(
      document.getElementById('modifiedComponent') as HTMLElement
    ).then((canvas) => {
      // Convert the canvas to a blob and save it as an image file
      canvas.toBlob((blob) => {
        // Add type assertion to ensure blob is not null
        saveAs(blob!, 'modifiedComponent.png');
      });
    });
  };

  const handleImageChange = (e: ChangeEvent<HTMLInputElement>): void => {
    const file = e.target.files?.[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setBackgroundImage(`url("${imageUrl}")`);
    }
  };

  const handleChooseImage = (): void => {
    // Trigger the file input click only if the ref is not null
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  return (
    <>
      <div className="flex flex-col items-center">
        <div className="w-full my-2">
          <h1 className="user_selection_text !px-2">change background</h1>
          <div onClick={handleChooseImage}>
            {/* Use a hidden file input and trigger it programmatically */}
            <input
              type="file"
              ref={fileInputRef}
              className="hidden rounded-xl"
              onChange={handleImageChange}
            />
            <button  className="btn2 !py-1 my-2">
              Choose Image
            </button>
          </div>
        </div>
        <div className=" ">
          <div
            style={{
              background: backgroundColor,
              backgroundImage: backgroundImage,
            }}
            className="w-[60vh] h-[40vh]  z-10 overflow-hidden "
            id="modifiedComponent"
          >
            <h1
              style={{ color: textColor, fontSize: `${fontSize}px` }}
              className="  text-center flex items-center justify-center h-full capitalize "
            >
              Distance means so little when someone means so much
            </h1>
          </div>
        </div>
        <div className="flex items-center justify-between gap-4 mt-10">
          <div className="flex flex-col gap-4 relative">
            <div className="w-full text-center">
              <h1 className="user_selection_text">background changer</h1>
            </div>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <div
                style={{
                  background: backgroundColor,
                }}
                className={`w-40 h-6 rounded-md cursor-pointer `}
                onClick={() => setShowColorPicker(!showColorPicker)}
              >
                {showColorPicker && (
                  <div className="absolute -top-20 left-40 z-20">
                    <SketchPicker
                      color={backgroundColor}
                      onChange={handleColorChange}
                    />
                  </div>
                )}
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-4 relative">
            <div className="w-full text-center">
              <h1 className="user_selection_text">text color changer</h1>
            </div>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <div
                style={{
                  background: textColor,
                }}
                className={`w-40 h-6  rounded-md cursor-pointer `}
                onClick={() => setShowTextColorPicker(!showTextColorPicker)}
              >
                {showTextColorPicker && (
                  <div className="absolute -top-20 left-40 z-20">
                    <SketchPicker
                      color={textColor}
                      onChange={handleTextColorChange}
                    />
                  </div>
                )}
              </div>
            </div>
          </div>

          <div className="flex flex-col  gap-4">
            <div className="w-full text-center">
              <h1 className="user_selection_text">Change Font Size</h1>
            </div>
            <input
              type="text"
              value={fontSize.toString()} // Display the font size in the input
              onChange={handleInputChange}
              className="border-[1px] border-blue-950 px-1 rounded-md w-[8rem]"
            />
          </div>
        </div>
        {/* Save, Preview, and Export buttons */}
        <div className="flex items-center justify-center mt-10">
          <button onClick={handlePreview} className="btn2 !py-1 !px-1">
            Preview
          </button>
          <button onClick={handleExport} className="btn2 !py-1 !px-1">
            Export
          </button>
        </div>
      </div>
    </>
  );
};

export default BackgroundChanger;
