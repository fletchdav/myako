class RadiosController < ApplicationController

def index
  @radios = Radio.all || []
end

end
