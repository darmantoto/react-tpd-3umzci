
import React from 'react';
//import ReactDOM from 'react-dom';
import { Grid, GridColumn as Column, GridToolbar } from '@progress/kendo-react-grid';
import { Dialog, DialogActionsBar } from '@progress/kendo-react-dialogs';
import { Input, NumericTextBox } from '@progress/kendo-react-inputs';
//import { pokemons } from './pokemons.jsx';
import cellWithEditing from '../components/cellWithEditing.jsx';

export class PokemonList extends React.Component {
    state = {
        pokemons: [],
        pokemonDetail: [],
        dataarr: [],
        productInEdit: undefined
    };
    
    //original
    /*componentDidMount() {
      fetch("https://pokeapi.co/api/v2/pokemon/?offset=20&limit=20")
      .then(response => response.json())
      .then((jsonData) => {
        // jsonData is parsed json object received from url
        console.log(jsonData);
        this.setState({
          pokemons: jsonData.results,
        })
      })
      .catch((error) => {
        // handle your errors here
        console.error(error)
      })
    }*/

//     //for 
//     componentDidMount() {
//       fetch("https://pokeapi.co/api/v2/pokemon/?offset=0&limit=20")
//       .then(response => response.json())
//       .then((jsonData) => {
//         // jsonData is parsed json object received from url
//         console.log("jsonData");
//         console.log(jsonData);
//         this.setState({
//           pokemons: jsonData.results,
//         })
// //this.state.pokemonDetail.concat([{'id': id, 'types':types}])
//         var jsonArray = new Array();
//         var jsonArray2 = {};
//         this.state.pokemons.forEach(function test(pokemon) {
//           fetch(pokemon.url)
//           .then(response => response.json())
//           .then((detailData) => {
//             var id = detailData.id;
//             var types = detailData.types;
//             //console.log("id : "+id);
//             this.setState({
//               //dataarr : {'id': id, 'types': types},
//               dataarr: this.state.dataarr.concat({'id': id, 'types': types}),
//             }) 
//             //jsonArray[id-1] = {'id': id, 'types': types};
//             jsonArray2[id-1] = {'id': id, 'types': types};

//             //console.log(jsonArray);
//             //console.log(this.state.pokemonDetail);

//             // this.setState({
//             //   pokemonDetail: this.state.pokemonDetail.concat(jsonArray),
//             // })

             
//           })
//           //jsonArray[0] = this.state.data;
//           console.log(this.state.data);
//         })
        
//         var testArray = new Array();
//         testArray[0] = {'id': 1, 'types':'a'};
//         testArray[1] = {'id': 2, 'types':'a'};
//         testArray[2] = {'id': 3, 'types':'a'};
//         testArray[3] = {'id': 4, 'types':'a'};
//         testArray[4] = {'id': 5, 'types':'a'};
//         console.log("testArray");
//         console.log(testArray);

//         //var details = this.state.pokemonDetail;
//         console.log("jsonArray");
//         console.log(jsonArray);

//         console.log("jsonArray2");
//         console.log(jsonArray2);

//         console.log("JSON.stringify(jsonArray)");
//         console.log(JSON.stringify(jsonArray));
        
//         console.log("jsonArray.length");
//         console.log(jsonArray.length);
//         var rv = {};
//         for (var i = 0; i < jsonArray.length; ++i)
//         rv[i] = jsonArray[i];

//         var obj = rv;
//         console.log("obj");
//         console.log(obj);

//         console.log("this.state.pokemons");
//         console.log(this.state.pokemons);

//         var merged = {...this.state.pokemons, ...obj};
//         console.log("merged");
//         console.log(merged);
        
//       })
//       .catch((error) => {
//         // handle your errors here
//         console.error(error)
//       })
//     }


    //for 
    componentDidMount() {
      let fetchData = fetch("https://pokeapi.co/api/v2/pokemon/?offset=0&limit=20")
      .then(response => response.json())
      .then((jsonData) => {
        // jsonData is parsed json object received from url
        console.log("jsonData");
        console.log(jsonData);
        
        //JSON.parse(eval(JSON.stringify(response)))
        var dataResults = jsonData.results;

        var joinDetail = [];
        dataResults.forEach((data) => {
          
          fetch(data.url)
          .then(response => response.json())
          .then((jsonData2) => {
            
            joinDetail = joinDetail.concat(jsonData2);
            this.setState({
              pokemonDetail: joinDetail,
            })
            console.log("joinDetail");
        console.log(joinDetail);
          })
        
        console.log("joinDetail");
        console.log(joinDetail);
      })

        console.log("this.state.pokemons");
        console.log(this.state.pokemons);
        //return jsonData.results;
      })
      .catch((error) => {
        // handle your errors here
        console.error(error)
      })

      console.log("fetchData");
      console.log(fetchData);

      console.log("this.state.pokemons");
      console.log(this.state.pokemons);
      //var joinDetail;
      // this.state.pokemons.forEach(function(data) {
      //   var joinDetail = this.state.pokemonDetail.concat(data);
      //   this.setState({
      //     pokemonDetail: joinDetail,
      //   })
      //   console.log("joinDetail");
      //   console.log(joinDetail);
      // })
      // console.log("joinDetail");
      // console.log(joinDetail);

      console.log("this.state.pokemonDetail");
      console.log(this.state.pokemonDetail);

      // fetchData.forEach(function(data) {
      //   var arrData = fetch(data.url)
      //   .then(response => response.json())
      //   .then((jsonData) => {
      //     // jsonData is parsed json object received from url
      //     console.log("jsonData");
      //     console.log(jsonData);
          
      //     //console.log("this.state.pokemons");
      //     //console.log(this.state.pokemons);
      //     //return fetch();
      //   })
      //   .catch((error) => {
      //     // handle your errors here
      //     console.error(error)
      //   })
      // })
    }
    

    // fetchDetail = (url) => {
    //   let data;
    //   fetch(url)
    //   .then(response => response.json())
    //   .then((detailData) => {
    //     let id = detailData.id;
    //     let types = detailData.types;
    //     console.log("id : "+id);
        
    //     data = {'id': id, 'types': types};
    //     console.log(data);
    //     return data;
    //   })
    //   //console.log(data);
    //   //return data;
    // }

    // fetchDetail2 = (url) => {
    //   fetch(url)
    //   .then((resp) => resp.json())
    //   .then(function(data) {
    //     let pokes = data.results;
    //     return pokes.map(function(poke) {
    //       let li = createNode('li'),
    //           img = createNode('img'),
    //           span = createNode('span');
    //       //img.src = poke.id;
    //       span.innerHTML = `${poke.id} ${poke.types}`;
    //       //append(li, img);
    //       append(li, span);
    //       append(ul, li);
    //     })
    //   })
    //   .catch(function(error) {
    //     console.log(error);
    //   });
    // }

    // toObject(arr) {
    //   var rv = {};
    //   for (var i = 0; i < arr.length; ++i)
    //     rv[i] = arr[i];
    //   return rv;
    // }


    edit = (dataItem) => {
        this.setState({ productInEdit: this.cloneProduct(dataItem) });
    }
    
    remove = (dataItem) => {
        const pokemons = this.state.pokemons.slice();
        const index = pokemons.findIndex(p => p.ProductID === dataItem.ProductID);
        if (index !== -1) {
            pokemons.splice(index, 1);
            this.setState({
                pokemons: pokemons
            });
        }
    }

    save = () => {
        const dataItem = this.state.productInEdit;
        const pokemons = this.state.pokemons.slice();

        if (dataItem.ProductID === undefined) {
            pokemons.unshift(this.newProduct(dataItem));
        } else {
            const index = pokemons.findIndex(p => p.ProductID === dataItem.ProductID);
            pokemons.splice(index, 1, dataItem);
        }

        this.setState({
            pokemons: pokemons,
            productInEdit: undefined
        });
    }

    cancel = () => {
        //this.setState({ productInEdit: undefined });
    }

    insert = () => {
        //this.setState({ productInEdit: { } });
    }

    render() {
        return (
            <div >
            <div id="authors"></div>
            <ul>
              
            </ul>
                <Grid
                    data={this.state.pokemonDetail}
                    style={{ height: '420px' }}
                >
                    <GridToolbar>
                        <button
                            onClick={this.insert}
                            className="k-button"
                        >
                            Add New
                        </button>
                    </GridToolbar>
                    <Column field="id" title="Id" width="50px" />
                    <Column field="name" title="Product Name" />
                    <Column field="url" title="slot" />
                    <Column field="types" title="types" />
                    <Column
                        title="Edit"
                        cell={cellWithEditing(this.edit, this.remove)}
                    />
                </Grid>
                {this.state.productInEdit && <DialogContainer dataItem={this.state.productInEdit} save={this.save} cancel={this.cancel}/>}
            </div>
        );
    }

    dialogTitle() {
        return `${this.state.productInEdit.ProductID === undefined ? 'Add' : 'Edit'} product`;
    }
    cloneProduct(product) {
        return Object.assign({}, product);
    }

    newProduct(source) {
        const newProduct = {
            ProductID: this.generateId(),
            ProductName: '',
            UnitsInStock: 0,
            Discontinued: false
        };

        return Object.assign(newProduct, source);
    }

    generateId() {
        let id = 1;
        this.state.pokemons.forEach(p => { id = Math.max((p.ProductID || 0) + 1, id); });
        return id;
    }
}

class DialogContainer extends React.Component {
  constructor(props) {
      super(props);
      this.state = {
          productInEdit: this.props.dataItem || null
      };
  }
  handleSubmit(event) {
      event.preventDefault();
  }

  onDialogInputChange = (event) => {
      let target = event.target;
      const value = target.type === 'checkbox' ? target.checked : target.value;
      const name = target.props ? target.props.name : target.name;

      const edited = this.state.productInEdit;
      edited[name] = value;

      this.setState({
          productInEdit: edited
      });
  }

  render() {
      return (
        <Dialog
            onClose={this.props.cancel}
        >
            <form onSubmit={this.handleSubmit}>
            <div style={{ marginBottom: '1rem' }}>
                <label>
                Product Name<br />
                <Input
                    type="text"
                    name="ProductName"
                    value={this.state.productInEdit.ProductName || ''}
                    onChange={this.onDialogInputChange}
                />
                </label>
            </div>
            <div style={{ marginBottom: '1rem' }}>
                <label>
                Units In Stock<br />
                <NumericTextBox
                    name="UnitsInStock"
                    value={this.state.productInEdit.UnitsInStock || 0}
                    onChange={this.onDialogInputChange}
                />
                </label>
            </div>
            <div>
                <label>
                <input
                    type="checkbox"
                    name="Discontinued"
                    checked={this.state.productInEdit.Discontinued || false}
                    onChange={this.onDialogInputChange}
                />
                Discontinued product
                                </label>
            </div>
            </form>
            <DialogActionsBar>
            <button
                className="k-button"
                onClick={this.props.cancel}
            >
                Cancel
                            </button>
            <button
                className="k-button k-primary"
                onClick={this.props.save}
            >
                Save
                            </button>
            </DialogActionsBar>
        </Dialog>
    );
  }
}

//export default PokemonList;

