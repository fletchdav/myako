class Info < ApplicationRecord
  validates :category,
    :inclusion  => { :in => [ 'contact', 'musique', 'reseau', 'presse', 'gig', 'collaboration' ],
    :message    => "Une de ces catégories doit être sélectionnée: Contact, Musique, Réseau, Presse, Gig" }
  validates :detail, presence: true
end
