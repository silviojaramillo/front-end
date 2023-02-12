class Producto{
    static contadorProductos = 0;
    constructor(nombre,precio){
        this._nombre = nombre;
        this._precio = precio;
        this._idProducto = ++Producto.contadorProductos;
    }

    get idP(){
        return this._idP;
    }
    get nombre(){
        return this._nombre;
    }
    set nombre(nombre){
        this._nombre = nombre;
    }

    get precio(){
        return this._precio;
    }
    set precio(precio){
        this._precio = precio
    }

    toString(){
        return `idProducto: ${this._idProducto}, nombre: ${this._nombre}, precio: $${this._precio}`;
    }
}


class Orden{
    static contadorAgregados = 0;
    static get MAX_PRODUCTS(){
        return 5;
    }
    constructor(){
        this._idO = ++Orden.contadorAgregados;
        this._productos = [];
    }

    get orden(){
        return this._idO;
    }

    agregarProducto(producto){
        if (this._productos.length < Orden.MAX_PRODUCTS) {
            this._productos.push(producto);
        } else {
            console.log('No se pueden agregar más productos')
        }
    }

    calcularTotal(){
        let totalVenta = 0;
        for(let producto of this._productos){
            totalVenta += producto.precio;
        }
        return totalVenta;
    }

    mostrarOrden(){
        let productosOrden = '';
        for(let producto of this._productos){
            productosOrden += '\n{' + producto.toString() + '}';
        }
        console.log(`Orden: ${this._idO} Total: ${this.calcularTotal()}, Productos: ${productosOrden}`);
    }

}

let producto1 = new Producto('Pantalón', 200);
let producto2 = new Producto('Camisa', 100);

let orden1 = new Orden();
orden1.agregarProducto(producto1);
orden1.agregarProducto(producto2);
orden1.mostrarOrden();

let orden2 = new Orden();
let producto3 = new Producto('Cinturon', 50);
orden2.agregarProducto(producto3);
orden2.agregarProducto(producto1);
orden2.agregarProducto(producto2);
orden2.agregarProducto(producto3);
orden2.agregarProducto(producto1);
orden2.agregarProducto(producto2);
orden2.mostrarOrden();