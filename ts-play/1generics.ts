// codigo reutilizable que funciona con multiples tipos
// puede ser funciones, interfaces o clases.


interface Person{
    id: number;
    name: string
}

interface Employee extends Person{
    role: string;
}


interface Product{
    id: number;
    name: string;
    price: number;
}


class DataColection <T extends {id: number, name: string}> { //es una convencion utilizar T, T de Type
    private items: T[]=[];

        addItem(newItem: T): void {
        this.items.push(newItem);
        }

        getItems(): void {
            console.log('List of items', JSON.stringify(this.items));
        }

        getNames(): string[]{
            return this.items.map((item) => item.name)

        }

        getItemById(id: number): T| undefined {
        return this.items.find((item:T) => item.id === id)
        }

    }


const productCollection = new DataColection<Product>  ();
const newData2 = {
    id: 2,
    name: 'Beer',
    price: 333
}


productCollection.addItem(newData2);
productCollection.getItems();


