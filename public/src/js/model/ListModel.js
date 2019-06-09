export default class ListModel {
	constructor() {
		this.id = "";
		this.item = "";
		this.qtde = "1";
		this.name = "";
		this.tel = "";
	}
	get Id() {
		return this.id;
	}
	set Id(value) {
		if (String(value).length > 0) {
			this.id = value;
		}
	}
	get Item() {
		return this.item;
	}
	set Item(value) {
		this.item = value;
	}
	get Qtde() {
		return this.qtde;
	}
	set Qtde(value) {
		this.qtde = value;
	}
	get Name() {
		return this.name;
	}
	set Name(value) {
		this.name = value;
	}
	get Tel() {
		return this.tel;
	}
	set Tel(value) {
		this.tel = value;
	}
	returnListJson() {
		let user = {};
		if (this.id) {
			user = {
				id: this.Id,
				item: this.Item,
				qtde: this.Qtde,
				name: this.Name,
				tel: this.Tel
			}
		} else {
			user = {
				item: this.Item,
				qtde: "1",
				name: this.Name,
				tel: this.Tel
			}
		}
		return user;
	}
	loadListFromForm(jsonList) {
		if (jsonList.id) {
			this.Id = jsonList.id;
		}
		this.Item = jsonList.item;
		this.Name = jsonList.name;
		this.Tel = jsonList.tel
	}
	insertList(listJson) {
		this.loadListFromForm(listJson);
		this.getReference('/list').push(this.returnListJson());
	}
	caastrarBanco() {
		let obj = [
			{ item: "Liquidificador", qtde: "1", name: "", tel: "" },
			{ item: "Batedeira", qtde: "1", name: "", tel: "" },
			{ item: "Espremedor de laranja", qtde: "1", name: "", tel: "" },
			{ item: "Cafeteira elétrica", qtde: "1", name: "", tel: "" },
			{ item: "Ferro de passar", qtde: "1", name: "", tel: "" },
			{ item: "Sanduicheira", qtde: "1", name: "", tel: "" },
			{ item: "Ventilador", qtde: "1", name: "", tel: "" },
			{ item: "Jogo de panela antiaderente", qtde: "1", name: "", tel: "" },
			{ item: "Jogo de panela", qtde: "1", name: "", tel: "" },
			{ item: "Panela de pressão 4,5L", qtde: "1", name: "", tel: "" },
			{ item: "Panela de pressão 7L", qtde: "1", name: "", tel: "" },
			{ item: "Conjunto de frigideiras antiaderente", qtde: "1", name: "", tel: "" },
			{ item: "Cuzcuzeira", qtde: "1", name: "", tel: "" },
			{ item: "Conjunto de facas", qtde: "1", name: "", tel: "" },
			{ item: "Faqueiro inox", qtde: "1", name: "", tel: "" },
			{ item: "Escorredor de arroz inox", qtde: "1", name: "", tel: "" },
			{ item: "Faqueiro inox", qtde: "1", name: "", tel: "" },
			{ item: "Escorredor de louça inox ", qtde: "1", name: "", tel: "" },
			{ item: "Tabua de carne de madeira", qtde: "1", name: "", tel: "" },
			{ item: "Conjunto de travessas", qtde: "1", name: "", tel: "" },
			{ item: "Conjunto de forma para bolo", qtde: "1", name: "", tel: "" },
			{ item: "Jogo de copos", qtde: "1", name: "", tel: "" },
			{ item: "Conjunto de travessas", qtde: "1", name: "", tel: "" },
			{ item: "Jogo de copos", qtde: "1", name: "", tel: "" },
			{ item: "Conjunto de forma para bolo", qtde: "1", name: "", tel: "" },
			{ item: "Conjunto de taças", qtde: "1", name: "", tel: "" },
			{ item: "Jarra para água", qtde: "1", name: "", tel: "" },
			{ item: "Boleira", qtde: "1", name: "", tel: "" },
			{ item: "Jarra para água", qtde: "1", name: "", tel: "" },
			{ item: "Jarra para suco", qtde: "1", name: "", tel: "" },
			{ item: "Tabua de passar", qtde: "1", name: "", tel: "" },
			{ item: "Concha/Colher para servir/Espátula/Espumadeira", qtde: "1", name: "", tel: "" },
			{ item: "Jogo de jantar (cor branca)", qtde: "1", name: "", tel: "" },
			{ item: "Lixeira de inox 8L", qtde: "1", name: "", tel: "" },
			{ item: "Cesto de roupa 57L", qtde: "1", name: "", tel: "" },
			{ item: "Conjunto de toalhas", qtde: "1", name: "", tel: "" },
			{ item: "Lixeira de inox 12L", qtde: "1", name: "", tel: "" },
			{ item: "Conjunto de toalhas", qtde: "1", name: "", tel: "" },
			{ item: "Cesto de roupa 57L", qtde: "1", name: "", tel: "" },
			{ item: "Conjunto de toalhas", qtde: "1", name: "", tel: "" },
			{ item: "Jogo de cama (Queen)", qtde: "1", name: "", tel: "" },
			{ item: "Conjunto de toalhas", qtde: "1", name: "", tel: "" },
			{ item: "Jogo de cama (Queen)", qtde: "1", name: "", tel: "" },
			{ item: "Jogo de panos de banheiro", qtde: "1", name: "", tel: "" },
			{ item: "Jogo de panos de banheiro", qtde: "1", name: "", tel: "" },
			{ item: "Jogo americano", qtde: "1", name: "", tel: "" }
		];
		obj.forEach((value) => {

			this.getReference('/list/').push(value);
		})
	}
	pushList(key, itens) {
		this.getReference('/list/' + key).set({ ...itens });
		location.reload();
	}
	listItens() {
		return new Promise((reject, resolve) => {
			this.getReference('/list').on('value', (item) => {
				//console.log(item.)
				if (item.val() != null) {
					resolve(item);
				} else {
					reject(item.val());
				}
			});

		})
	}
	getReference(route) {
		return firebase.database().ref(route);
	}
}