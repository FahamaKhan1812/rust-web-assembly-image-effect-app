const init = async () => {
  let rustApp = null;

  try {
    rustApp = await import("./../pkg");
  } catch (e) {
    console.error(e);
    return;
  }
  const input = document.getElementById("upload");
  const fileReader = new FileReader();

  fileReader.onloadend = () => {
    const base64 = fileReader.result.replace(
      /^data:image\/(png|jpg|jpeg,);base64,/,
      "",
    );
    const imageDataURL = rustApp.grayscale(base64);
    document.getElementById("new-img").setAttribute("src", imageDataURL);
  };

  input.addEventListener("change", () => {
    rawFile = fileReader.readAsDataURL(input.files[0]);
  });
};

init();
