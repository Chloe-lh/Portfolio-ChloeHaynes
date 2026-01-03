class MultiFilter{
    constructor(element, options = {}){
        let defaults={
            placeholder: 'Select item(s)',
            search: true,
            selectAll: true,
            listAll: true,
            closeListOnItemSelect: false,
            data:[],
            onChange: function(){},
            onSelect: function(){},
            onUnselect: function(){},
        };
        //* Copy the values of all of the enumerable own properties from one or more source objects to a target object. Returns the target object.
        this.options = Object.assign(defaults, options);
        // element thats been selected
        // if the element is a string, get it from the html, if the element is a object, return it
        this.selectElement = typeof element == 'string' ? document.querySelector(element): element;
        // create deep copy of DOM element and store it
        //* will not be part of document until its appended to another node already part of document
        this.ogSelectElement = this.selectElement.cloneNode(true);
        // iterate through elements data attributes
        // only update known options
        // convert true/false strings into actual booleans
        /* EX
            this.options = {
            search: false,
            maxItems: 1,
            placeholder: "Select..."
            };
            <select data-search="true" data-placeholder="Pick one">
            this.options = {
            search: true,
            maxItems: 1,
            placeholder: "Pick one"
            };
        */
        for(a in this.selectElement.dataset){
            if(this.options[a] !== undefined){
                if(typeof this.options[a] === 'boolean'){
                    this.options[a] = this.selectElement.dataset[a] === 'true';
                } else{
                    this.options[a] = this.selectElement.dataset[a]
                }
            }
        }
        this.name = this.selectElement.getAttr('name')
        this.originalData = JSON.parse(JSON.stringify(this.options.data))
        this.element = this._template();
        this.selectElement.replaceWith(this.element);
        this.outsideClickHandler = this._outsideClick.bind(this);
        this._updateSelected();
        this._eventHandlers();
        if (this.options.disabled){
            this.disable();
        }
    }

    _template(){
        let optionsHTML = '';
        for(let i=0; i<this.data.length; i++){
            const isSelected = this.data[i].selected;
            optionsHTML += `
                <div 
                    class="multi-select-option${isSelected? 'multi-select-selected' : ''}" 
                    data-value="${this.data[i].value}
                    tabindex="-1" >
                <span class="multi-select-option-radio></span>
                <span class="multi-select-option-text">
                    ${this.data[i].text? this.data[i].text : 'no text'}
                </span>
            `;
        }
        let selectAllHTML = '';
        if(this.options.selectAll){
            selectAllHTML = `
                <div
                    class="multi-select-all
                    tabindex="-1">
                <span class="multi-select-option-radio></span>
                <span class="multi-select-option-text">Select all</span>
                </div>`    
        }
        template=`
        <div class="multi-select ${this.name}" 
            ${this.selectElement.id ? ' id="' + this.selectElement.id+ '"':''}
            style="${this.width? 'width:' +  this.width + ';': ''}${this.height? 'height:' +  this.height + ';': ''}>`
            

    }
}