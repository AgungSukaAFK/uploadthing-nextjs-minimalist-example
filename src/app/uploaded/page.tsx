"use client";
export default function Uploaded() {
  const dummy: [{ name: string; size: number; key: string }] = [
    {
      name: "Better tabel mk - Sheet1.pdf",
      size: 35754,
      key: "U6gTdkgQ03QrCPRgxcflGwFRdEXtv0N2UrcODHsuJy3KijQg",
    },
  ];
  async function handleViewFile(key: string) {
    const url = `https://utfs.io/f/${key}`;
    window.open(url, "_blank");
  }
  return (
    <div>
      <h1>Uploaded files: </h1>
      {dummy &&
        dummy.map((item, index) => {
          return (
            <div key={index} onClick={() => handleViewFile(item.key)}>
              <p>{item.name}</p>
              <p>{item.size}</p>
            </div>
          );
        })}
    </div>
  );
}
