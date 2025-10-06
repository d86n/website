const models = [
    { file: "396.glb", name: "396" },
    { file: "395.glb", name: "395" },
    { file: "322.glb", name: "322" },
    { file: "321.glb", name: "321" },
    { file: "318.glb", name: "318" },
    { file: "31.glb", name: "31" },
    { file: "30.glb", name: "30" },
    { file: "29.glb", name: "29" },
    { file: "28.glb", name: "28" },
    { file: "27.glb", name: "27" },
    { file: "26.glb", name: "26" },
    { file: "25.glb", name: "25" },
    { file: "24.glb", name: "24" },
    { file: "23.glb", name: "23" },
    { file: "22.glb", name: "22" },
    { file: "21.glb", name: "21" },
    { file: "20.glb", name: "20" },
    { file: "19.glb", name: "19" },
    { file: "18.glb", name: "18" },
    { file: "17.glb", name: "17" },
    { file: "16.glb", name: "16" },
    { file: "15.glb", name: "15" },
    { file: "14.glb", name: "14" },
    { file: "13.glb", name: "13" },
    { file: "12.glb", name: "12" },
    { file: "11.glb", name: "11" },
    { file: "10.glb", name: "10" },
    { file: "9.glb", name: "9" },
    { file: "8.glb", name: "8" },
    { file: "7.glb", name: "7" },
    { file: "6.glb", name: "6" },
    { file: "5.glb", name: "5" },
    { file: "4.glb", name: "4" },
    { file: "3.glb", name: "3" },
    { file: "2.glb", name: "2" },
    { file: "1.glb", name: "1" }
];

const grid = document.getElementById('model-grid');
models.forEach(model => {
    const card = document.createElement('div');
    card.className = 'model-card';
    card.innerHTML = `
        <model-viewer src="shared-assets/models/${model.file}" alt="${model.name}" camera-controls disable-tap"></model-viewer>
        <span>${model.name} (<a href="shared-assets/models/${model.name}.SLDPRT">${model.name}.SLDPRT</a>)</span>
    `;
    grid.appendChild(card);
});