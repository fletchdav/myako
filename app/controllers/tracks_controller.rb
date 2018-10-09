class TracksController < ApplicationController

  def index
    @tracks = Track.all || []
    @productions = Production.all || []
    @labels = Label.all || []
  end
end
