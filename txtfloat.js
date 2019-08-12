var txtAnim = {
    len: 0,
    txtfloat: "",
    arrTxt: [],
    init: function(obj) {

        this.obj = obj;
        this.txtfloat = obj.innerHTML.replace(/\s+/g, "");
        this.len = this.txtfloat.length;
        obj.innerHTML = "";
        this.addDom();

    },

    addDom: function() {
        for (var i = 0; i < this.len; i++) {
            var spanDom = document.createElement("span");
            spanDom.innerHTML = this.txtfloat.substring(i, i + 1);
            this.obj.appendChild(spanDom);
            this.arrTxt.push(spanDom);
        };

        for (var j = 0; j < this.len; j++) {
            this.arrTxt[j].style.position = "relative";
        };
        this.strat();
    },

    strat: function() {
        for (var i = 0; i < this.len; i++) {
            this.arrTxt[i].onmouseover = function() {
                this.stop = 0;
                this.speed = -1;
                var $this = this;
                this.timer = setInterval(function() {
                        $this.stop += $this.speed; //0 += -1
                        if ($this.stop <= -20) {
                            $this.speed = 1;

                        }

                        $this.style.top = $this.stop + "px";

                        if ($this.stop >= 0) {

                            clearInterval($this.timer)

                            $this.style.top = 0 + "px";

                        };

                    },
                    15

                );

            };

        }

    }

}

