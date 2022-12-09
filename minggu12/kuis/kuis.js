var dataMahasiswa = ["Firman", "Naufal", "Arya"];
var dataJurusan = ["Kedokteran", "TI", "Farmasi"];

function tampil() {
  document.getElementById("table");
  table.innerHTML =
    "<thead><tr><th>No.</th><th>Nama Mahasiswa</th><th>Jurusan</th><th>Aksi</th></tr></thead>";

  for (var i = 0; i < dataMahasiswa.length; i++) {
    var btnEdit =
      "<button class='btn btn-success btn-edit' href='#' onclick='editData(" +
      i +
      ")'><i class='fa fa-pencil'></i></button>";

    var btnHapus =
      "<button class='btn btn-danger btn-hapus' href='#' onclick='hapusData(" +
      i +
      ")'><i class='fa fa-trash'></i></button>";

    j = i + 1;
    table.innerHTML +=
      "<tr><td>" +
      j +
      "</td><td>" +
      dataMahasiswa[i] +
      "</td><td>" +
      dataJurusan[i] +
      "</td><td>" +
      btnEdit +
      " " +
      btnHapus +
      "</tr>";
  }
}

function tambahData() {
  var inputNama = document.querySelector("#nama_mahasiswa");
  var inputJurusan = document.querySelector("#jurusan");
  dataMahasiswa.push(inputNama.value);
  dataJurusan.push(inputJurusan.value);
  //   input1.value = "";
  //   input2.value = "";
  tampil();
}

function editData(id) {
  var newMhs = prompt("Edit nama", dataMahasiswa[id]);
  var newJurusan = prompt("Edit jurusan", dataJurusan[id]);
  dataMahasiswa[id] = newMhs;
  dataJurusan[id] = newJurusan;
  tampil();
}

function hapusData(id) {
  dataMahasiswa.splice(id, 1);
  dataJurusan.splice(id, 1);
  tampil();
}

tampil();
