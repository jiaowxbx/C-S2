handleOk = () => {
    this.props.form.validateFieldsAndScroll((err, value) => {
        if (err) return;
        let data = {
            username: value.username, age: value.age, address: value.address
        };
        if (this.state.modalType === 'add') {
            axios.post("http://127.0.0.1:3005/user", data)
                .then(msg => {
                    this.sizeChange(this.state.current, this.state.size);
                    this.setState({visible: false});
                    message.success('success!')
                })
        } else {
            axios.put("http://127.0.0.1:3005/user/" + this.state.editRow.id, data)
                .then(data => {
                    this.sizeChange(this.state.current, this.state.size);
                    this.setState({visible: false});
                    message.success('success!')
                })
        }
    })
}
