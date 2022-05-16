import React from 'react'

class DisplayTable extends React.Component{

    constructor(props){
        super(props)
        this.state = {
            list: []    
        }
        this.callAPI = this.callAPI.bind(this)
        this.callAPI();
    }

    

    callAPI(){
        fetch('http://localhost:8080/api/lista').then(
            (response)=>response.json()
        ).then((data)=>{
            console.log(data)
            this.setState({list: data
            })
        })
    }

    render(){
        let tb_data = this.state.list.map((item)=>{
            return(
                <tr key={item.id} className="border border-dark">
                    <td className='border border-dark'>{item.data_transferencia}</td>
                    <td className='border border-dark'>{item.valor}</td>
                    <td className='border border-dark'>{item.tipo}</td>
                    <td className='border border-dark'>{item.nome_operador_transacao}</td>
                </tr>
            )
        })
        return(
            <div className='container mt-5'>
                <table className="table table-hover bg-white">
                    <thead className='border border-dark' >
                    <tr >
                        <th className='border border-dark'>Data</th>
                        <th className='border border-dark'>Valor</th>
                        <th className='border border-dark'>Tipo</th>
                        <th className='border border-dark'>Nome operador transação</th>
                    </tr>
                    </thead>
                    <tbody>
                        {tb_data}
                    </tbody>
                </table>
            </div>
        ) 
    }
}

export default DisplayTable ;