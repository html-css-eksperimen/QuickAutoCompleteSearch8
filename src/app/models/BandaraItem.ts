export class BandaraItem {
  iata = '';
  nama = '';
  kategori = '';
  pengelola = '';
  alamat = '';

  constructor(iatas: string = '', namas: string = '',
              kategoris: string = '', pengelolas: string = '', alamats: string = '') {

      this.iata = iatas;
      this.nama = namas;
      this.kategori = kategoris;
      this.pengelola = pengelolas;
      this.alamat = alamats;
  }
}
